import { openai, RAGChat } from "@upstash/rag-chat";
import { redis } from "./redis";

export const ragChat = new RAGChat({
  model: openai("gpt-3.5-turbo", {
    "apiKey": "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"
        }),
        redis:redis
  })