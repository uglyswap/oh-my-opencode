import { websearch_exa } from "./websearch-exa"
import { context7 } from "./context7"
import { grep_app } from "./grep-app"
// Z AI MCPs
import { zai_vision } from "./zai-vision"
import { web_search_prime } from "./web-search-prime"
import { web_reader } from "./web-reader"
import { zread } from "./zread"
import type { McpName } from "./types"

export { McpNameSchema, type McpName } from "./types"

const allBuiltinMcps: Record<McpName, any> = {
  // Original MCPs
  websearch_exa,
  context7,
  grep_app,
  // Z AI MCPs
  "zai-vision": zai_vision,
  "web-search-prime": web_search_prime,
  "web-reader": web_reader,
  "zread": zread,
}

export function createBuiltinMcps(disabledMcps: McpName[] = []) {
  const mcps: Record<string, any> = {}

  for (const [name, config] of Object.entries(allBuiltinMcps)) {
    if (!disabledMcps.includes(name as McpName)) {
      mcps[name] = config
    }
  }

  return mcps
}
