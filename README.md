# AI Agents Infrastructure Landscape

Awesome, living curated landscape of agentic llm ops and stacks.
Talk directly with this repository through your chat using MCP - query, compare tools, and research from your IDE or AI assistant. This repo captures the 2025 landscape of agent coding, infrastructure and LLMOps tools so you can keep up with what's real, why it exists, and how it fits together. Browse the interactive UI to see each tool's purpose, whether it's OSS or commercial, and jump straight to docs/GitHub. Or connect via MCP to pick a stack, compare options, and move from research to implementation without leaving your editor.

Inspired by curated lists, but built for hands-on research with your MCP Client or IDE.


## Quick Start

View the interactive landscape: [dudany.github.io/ai-infra-landscape.github.io](https://dudany.github.io/ai-infra-landscape.github.io/)

Or query this repo from your IDE/assistant via MCP-see [Connect via GitMCP](#connect-via-gitmcp) below.

Then ask your assistant questions like: "Compare LangGraph vs CrewAI for stateful agents" or "Recommend a stack for RAG with strict PII access."

[![AI Infra Landscape](landscape-screenshot.png)](https://dudany.github.io/ai-infra-landscape.github.io/)

*Click the image above to explore the interactive landscape or visit the [live site](https://dudany.github.io/ai-infra-landscape.github.io/)*


## Features

- **Browse via UI**: Explore layers → components → tools at [dudany.github.io/ai-infra-landscape.github.io](https://dudany.github.io/ai-infra-landscape.github.io/), open a tool to view a concise summary plus links (docs, GitHub, GitMCP where available).
- **Query via MCP**: Connect this dataset to your IDE/assistant to compare tools, filter by needs, and jump to external docs without leaving your editor.


## Connect via GitMCP

Use GitMCP to let your IDE/assistant read this repo’s docs and dataset while you research. Thanks to GitMCP, you can query this repo via MCP.

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

Claude Desktop (`~/Library/Application Support/Claude/claude_desktop_config.json`):
```json
{
  "mcpServers": {
    "ai-infra-landscape.github.io Docs": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://gitmcp.io/dudany/ai-infra-landscape.github.io"
      ]
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

More tips and examples in `docs/mcp.md`.

## Contributing

Contributions are welcome! We'd love your help making this landscape more comprehensive and useful.

### How to Contribute

To add a new tool, update existing entries, or improve the project:

1. Read the [Contributing Guide](CONTRIBUTING.md) for detailed instructions
2. Fork this repository and clone your fork
3. Add your tool entry to `data/tools_descriptions.json`
4. Test locally by opening `index.html` in a browser
5. Push to your fork and submit a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for the complete guide, field descriptions, and guidelines.

### Quick Example

```json
{
  "name": "MyTool",
  "type": "open source sdk",
  "layer": ["Agent Runtime"],
  "component": ["Agent Orchestration & Frameworks"],
  "summary": "Clear description of what this tool does and why it matters.",
  "docs_url": "https://example.com/docs",
  "github_url": "https://github.com/example/mytool",
  "icon_url": "https://example.com/favicon.ico",
  "oss": true,
  "vendor": "ExampleCo",
  "notes": "Additional context or use cases",
  "last_known_update": "2025-10-25",
  "license": "MIT"
}
```

## Development

To run this repo locally:

```bash
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

### Making Changes

1. Edit the relevant file based on what you're changing:
   - Visual styles → `styles.css`
   - Theme behavior → `js/theme-manager.js`
   - Grid layout/rendering → `js/landscape.js`
   - Tool modals → `js/modal.js`

2. Test locally by opening `index.html` in a browser or using the http-server command above

3. Data is loaded from `data/tools_descriptions.json` (includes `gitmcp_url` auto-derived from `github_url`)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

