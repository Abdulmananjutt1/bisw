import {
  knowledgeBase,
  fallbackResponse,
  type BotMessage,
  type KnowledgeEntry,
} from "./data";

/**
 * Keyword-matching engine.
 * Normalises the input, scores phrase/word matches, and returns the most
 * relevant response instead of the first broad keyword it sees.
 */
export function getBotResponse(userInput: string): BotMessage {
  const normalised = normalizeText(userInput);
  let bestMatch: { entry: KnowledgeEntry; score: number } | null = null;

  for (const entry of knowledgeBase) {
    // Skip the fallback sentinel entry
    if (entry.triggers[0] === "__fallback__") continue;

    const score = Math.max(
      ...entry.triggers.map((trigger) => getTriggerScore(normalised, trigger))
    );

    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { entry, score };
    }
  }

  return bestMatch?.entry.response ?? fallbackResponse;
}

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9#]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function getTriggerScore(input: string, trigger: string) {
  const normalisedTrigger = normalizeText(trigger);
  if (!input || !normalisedTrigger || normalisedTrigger === "__fallback__") {
    return 0;
  }

  const inputTokens = input.split(" ");
  const triggerWords = normalisedTrigger.split(" ");

  if (triggerWords.length === 1) {
    return inputTokens.includes(normalisedTrigger)
      ? 10 + normalisedTrigger.length
      : 0;
  }

  const phraseScore = 30 + triggerWords.length * 5 + normalisedTrigger.length;
  if (` ${input} `.includes(` ${normalisedTrigger} `)) {
    return phraseScore;
  }

  const meaningfulWords = triggerWords.filter((word) => word.length > 2);
  if (
    meaningfulWords.length >= 2 &&
    meaningfulWords.every((word) => inputTokens.includes(word))
  ) {
    return 15 + meaningfulWords.length * 3;
  }

  return 0;
}
