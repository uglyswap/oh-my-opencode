export const zread = {
  type: "http" as const,
  url: "https://api.z.ai/api/mcp/zread/mcp",
  headers: {
    Authorization: `Bearer ${process.env.Z_AI_API_KEY || ""}`,
  },
  enabled: true,
}
