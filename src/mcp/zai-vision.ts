import { readFileSync } from "fs"
import { homedir } from "os"
import { join } from "path"

function getZaiApiKey(): string {
  // Try environment variable first
  if (process.env.Z_AI_API_KEY) {
    return process.env.Z_AI_API_KEY
  }
  // Fallback to ~/.zai-env file
  try {
    const envFile = join(homedir(), ".zai-env")
    const content = readFileSync(envFile, "utf-8")
    const match = content.match(/Z_AI_API_KEY=(.+)/)
    return match ? match[1].trim() : ""
  } catch {
    return ""
  }
}

export const zai_vision = {
  type: "stdio" as const,
  command: "cmd",
  args: ["/c", "npx", "-y", "@z_ai/mcp-server"],
  env: {
    Z_AI_API_KEY: getZaiApiKey(),
    Z_AI_MODE: "ZAI",
  },
  enabled: true,
}
