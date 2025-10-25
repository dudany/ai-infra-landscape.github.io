# Contributing to AI Infrastructure Landscape

Thank you for your interest in contributing to the AI Infrastructure Landscape! This guide will help you add new tools, frameworks, or services to the landscape.

## How to Contribute

### Adding a New Tool

The easiest way to contribute is by adding a new tool entry to our dataset:

1. **Fork the repository** - Click the "Fork" button on GitHub to create your own copy

2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ai-infra-landscape.github.io.git
   cd ai-infra-landscape.github.io
   ```

3. **Create a new branch** for your contribution:
   ```bash
   git checkout -b add-tool-name
   ```

4. **Edit `data/tools_descriptions.json`** and add your tool entry to the `tools` array. Use this template:

```json
{
  "name": "YourToolName",
  "type": "open source sdk",
  "layer": ["Agent Runtime"],
  "component": ["Agent Orchestration & Frameworks"],
  "summary": "Clear, concise description of what this tool does and why it matters. Focus on the key value proposition.",
  "docs_url": "https://example.com/docs",
  "github_url": "https://github.com/org/repo",
  "gitmcp_url": "https://gitmcp.io/org/repo",
  "icon_url": "https://example.com/favicon.ico",
  "oss": true,
  "vendor": "Company or Community",
  "notes": "Additional context, use cases, or distinguishing features.",
  "last_known_update": "2025-10-25",
  "maturity": "production",
  "enterprise_ready": true,
  "license": "MIT"
}
```

### Field Descriptions

- **name** (required): Official name of the tool
- **type** (required): One of: `"open source sdk"`, `"proprietary"`, `"protocol"`, `"open-source"`
- **layer** (required): Array of layers where this tool fits. Options:
  - `"Agent Runtime"`
  - `"Memory, Knowledge & Context"`
  - `"Compute, Infrastructure & Scaling"`
  - `"Observability, Control & Evaluation"`
  - `"Security, Identity & Access"`
- **component** (required): Array of specific components. Options:
  - `"Agent Orchestration & Frameworks"`
  - `"Agent Communication & Tool Access Protocols"`
  - `"Vector Databases & Knowledge Stores"`
  - `"Context Optimization & Memory"`
  - `"Compute & Inference"`
  - `"Fine-Tuning & Experimentation"`
  - `"Agent Data Distribution / Map-Reduce"`
  - `"Monitoring & Observability"`
  - `"Prompt Management & Evaluation"`
  - `"Authentication"`
  - `"MCP Identity Management"`
  - `"Model API"`
- **summary** (required): 1-2 sentences describing the tool's purpose and value
- **docs_url** (required): Link to official documentation
- **github_url** (optional): GitHub repository URL (if open source)
- **gitmcp_url** (optional): GitMCP URL (auto-derived from github_url as `https://gitmcp.io/{owner}/{repo}`)
- **icon_url** (optional): URL to the tool's icon or favicon
- **oss** (required): `true` for open source, `false` for proprietary
- **vendor** (required): Company name or "Community"
- **notes** (optional): Additional context, use cases, or notes
- **last_known_update** (required): Date in YYYY-MM-DD format
- **maturity** (optional): `"production"`, `"beta"`, or `"experimental"`
- **enterprise_ready** (optional): `true` or `false`
- **license** (optional): License type (e.g., "MIT", "Apache-2.0", "GPL-3.0")

### Guidelines

- **Be concise**: Keep summaries short and comparison-friendly
- **Use official sources**: Prefer official documentation and GitHub links
- **Match existing structure**: Use existing `layer` and `component` values so your tool appears in the correct location
- **Avoid marketing language**: Focus on technical capabilities and use cases
- **Keep it current**: Include the most recent update date you're aware of
- **One tool per PR**: Submit separate pull requests for each tool to make reviews easier

### Example Entry

Here's a real example from the landscape:

```json
{
  "name": "LangGraph",
  "type": "open source sdk",
  "component": ["Agent Orchestration & Frameworks"],
  "summary": "Graph-based, stateful runtime for agents and tool use with checkpoints and human-in-the-loop. Stateful, graph-based orchestration framework for building complex multi-step agents with cyclic workflows.",
  "docs_url": "https://python.langchain.com/docs/langgraph/",
  "github_url": "https://github.com/langchain-ai/langgraph",
  "gitmcp_url": "https://gitmcp.io/langchain-ai/langgraph",
  "icon_url": "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
  "oss": true,
  "vendor": "LangChain",
  "notes": "Prefer explicit graphs over opaque loops for prod. 2025 enhancements for retries in production.",
  "last_known_update": "2025-07-01",
  "maturity": "production",
  "enterprise_ready": true,
  "license": "MIT",
  "layer": ["Agent Runtime"]
}
```

### Testing Your Changes

Before submitting, test your changes locally:

1. Open `index.html` in a web browser
2. Verify your tool appears in the correct layer and component
3. Check that all links work correctly
4. Ensure the summary is clear and readable

### Submitting Your Pull Request

1. **Commit your changes**:
   ```bash
   git add data/tools_descriptions.json
   git commit -m "Add [ToolName] to the landscape"
   ```

2. **Push to your fork**:
   ```bash
   git push origin add-tool-name
   ```

3. **Open a Pull Request** on GitHub:
   - Go to the original repository: `https://github.com/dudany/ai-infra-landscape.github.io`
   - Click "New Pull Request"
   - Click "compare across forks"
   - Select your fork and branch as the source
   - Provide a clear title: "Add [ToolName] to the landscape"
   - Describe what the tool does and why it should be included
   - The PR will require approval before merging (branch protection is enabled)

4. **Wait for review**: A maintainer will review your PR and may request changes

## Other Contributions

Beyond adding tools, you can also contribute:

- **Improve existing entries**: Update outdated information, add missing fields, or clarify summaries
- **Fix bugs**: Report or fix issues with the UI, layout, or functionality
- **Enhance features**: Propose new features or improvements to the visualization
- **Documentation**: Improve this guide or other documentation

For these contributions, follow the same fork-based workflow described above.

## Questions?

If you have questions about contributing, feel free to:
- Open an issue on GitHub
- Review existing issues and pull requests
- Check the README.md for project overview

Thank you for helping make the AI Infrastructure Landscape more comprehensive and useful for the community!

