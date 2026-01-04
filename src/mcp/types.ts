import { z } from "zod"

export const McpNameSchema = z.enum([
  "websearch_exa",
  "context7",
  "grep_app",
  // Z AI MCPs
  "zai-vision",
  "web-search-prime",
  "web-reader",
  "zread",
])

export type McpName = z.infer<typeof McpNameSchema>
