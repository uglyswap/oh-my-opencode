export const zai_vision = {
  type: "stdio" as const,
  command: "cmd",
  args: ["/c", "npx", "-y", "@z_ai/mcp-server"],
  env: {
    Z_AI_API_KEY: process.env.Z_AI_API_KEY || "",
    Z_AI_MODE: "ZAI",
  },
  enabled: true,
}
