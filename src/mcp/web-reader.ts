export const web_reader = {
  type: "http" as const,
  url: "https://api.z.ai/api/mcp/web_reader/mcp",
  headers: {
    Authorization: `Bearer ${process.env.Z_AI_API_KEY || ""}`,
  },
  enabled: true,
}
