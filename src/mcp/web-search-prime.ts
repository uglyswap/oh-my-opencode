import { readFileSync } from "fs"
import { homedir } from "os"
import { join } from "path"

function getZaiApiKey(): string {
  if (process.env.Z_AI_API_KEY) {
    return process.env.Z_AI_API_KEY
  }
  try {
    const envFile = join(homedir(), ".zai-env")
    const content = readFileSync(envFile, "utf-8")
    const match = content.match(/Z_AI_API_KEY=(.+)/)
    return match ? match[1].trim() : ""
  } catch {
    return ""
  }
}

export const web_search_prime = {
  type: "http" as const,
  url: "https://api.z.ai/api/mcp/web_search_prime/mcp",
  headers: {
    Authorization: `Bearer ${getZaiApiKey()}`,
    Accept: "application/json, text/event-stream",
  },
  enabled: true,
}
