# MCP: Connect Your IDE to This Documentation

Use GitMCP to let your AI assistant read this repo’s documentation and dataset while you research and plan your agentic architecture.

## Connect to this repo

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

VSCode (`.vscode/mcp.json`):
```json
{
  "servers": {
    "gitmcp": {
      "type": "sse",
      "url": "https://gitmcp.io/dudany/ai-infra-landscape.github.io"
    }
  }
}
```

## After research: add implementation MCPs
Add additional MCP servers to start building based on your chosen stack:
```json
{
  "mcpServers": {
    "langchain Docs": {
      "url": "https://gitmcp.io/langchain-ai/langchain"
    }
  }
}
```
More examples: LangGraph, LlamaIndex, Weaviate, Qdrant, Supabase, Langfuse.

## Tips
- Ask comparison questions across families/categories.
- Request a suggested stack for your workflow (framework + memory + observability + gateway).
- Then connect the recommended MCPs above and implement.
