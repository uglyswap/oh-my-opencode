export const web_search_prime = {
  type: "http" as const,
  url: "https://api.z.ai/api/mcp/web_search_prime/mcp",
  headers: {
    Authorization: `Bearer ${process.env.Z_AI_API_KEY || ""}`,
  },
  enabled: true,
}
