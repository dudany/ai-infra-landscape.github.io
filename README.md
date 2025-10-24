# AI Agents Infrastructure Landscape

[![GitMCP](https://img.shields.io/endpoint?url=https://gitmcp.io/badge/dudany/ai-infra-landscape.github.io)](https://gitmcp.io/dudany/ai-infra-landscape.github.io)

A comprehensive, interactive landscape of the AI agent infrastructure ecosystem for 2025.

## Purpose

This project helps you make fast, confident decisions about your agentic stack. It has two parts:
- Visual, interactive landscape: explore families → categories → tools at a glance.
- GitMCP integration: connect your MCP client to this repo, chat to research/compare, then jump into other projects’ docs (LangChain, LangGraph, vector DBs, eval tools, and more) via their GitMCP endpoints.

Inspired by curated lists like [Awesome-LLMOps](https://github.com/tensorchord/Awesome-LLMOps), but optimized for hands-on research with your IDE and an agent.


## Features

- **Dual View Modes**: Toggle between grid view and architecture diagram
- **Theme Support**: Auto/Light/Dark theme switching
- **Hierarchical Organization**: Families → Categories → Tools
- **Color-Coded**: Each family has its own color scheme
- **Interactive**: Click tools for detailed information
- **Responsive**: Works on desktop and mobile

## Development

To work on this project:

## Use with GitMCP

Connect your IDE/assistant to this repo to research the ecosystem directly:

Cursor (`~/.cursor/mcp.json`):
```json
{
  "mcpServers": {
    "ai-infra-landscape.github.io Docs": {
      "url": "https://gitmcp.io/dudany/ai-infra-landscape.github.io"
    }
  }
}
```

After research, add implementation MCPs (example):
```json
{
  "mcpServers": {
    "langchain Docs": {
      "url": "https://gitmcp.io/langchain-ai/langchain"
    }
  }
}
```

See `docs/mcp.md` for more options and tips.

## Add tools to the landscape

Contributions welcome! Add entries to `data/tools_descriptions.json` under `tools[]`.

Example item:
```json
{
  "name": "MyTool",
  "type": "open source sdk",
  "family": ["Core Agent Infrastructure"],
  "category": ["Agent Orchestration & Frameworks"],
  "summary": "One-liner that explains what it does and why it matters.",
  "docs_url": "https://example.com/docs",
  "github_url": "https://github.com/example/mytool",
  "icon_url": "https://example.com/favicon.ico",
  "oss": true,
  "vendor": "ExampleCo",
  "notes": "Optional extra context",
  "last_known_update": "2025-10-01"
}
```

Guidelines:
- Keep summaries short and comparison-friendly.
- Prefer official docs and GitHub links.
- Use existing `family` and `category` values so cards render in the right place.
1. Edit the relevant file based on what you're changing:
   - Visual styles → `styles.css`
   - Theme behavior → `js/theme-manager.js`
   - Grid layout/rendering → `js/landscape.js`
   - Diagram view → `js/mermaid-diagram.js`
   - Tool modals → `js/modal.js`

2. Test locally by opening `index.html` in a browser

3. Data is loaded from `data/tools_descriptions.json` (includes `gitmcp_url` auto‑derived from `github_url`)

## Architecture Diagram

The architecture diagram uses Mermaid's `architecture-beta` syntax with:
- Grouped hierarchies (families as groups)
- Relevant icons for each service
- Nested category services within family groups

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Uses CSS Grid and Flexbox

