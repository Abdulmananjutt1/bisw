import { knowledgeBase, fallbackResponse, type BotMessage } from "./data";

/**
 * Simple keyword-matching engine.
 * Normalises the input and checks each knowledge entry's triggers.
 * Returns the first matching response, or the fallback.
 */
export function getBotResponse(userInput: string): BotMessage {
  const normalised = userInput.toLowerCase().trim();

  for (const entry of knowledgeBase) {
    // Skip the fallback sentinel entry
    if (entry.triggers[0] === "__fallback__") continue;

    const matched = entry.triggers.some((trigger) =>
      normalised.includes(trigger.toLowerCase())
    );

    if (matched) return entry.response;
  }

  return fallbackResponse;
}
