(function injectMcpSection() {
  function createSectionContainer() {
    const section = document.createElement('section');
    section.id = 'mcp';
    section.className = 'section';
    return section;
  }

  function createTitle(text) {
    const h2 = document.createElement('h2');
    h2.className = 'section-title';
    h2.textContent = text;
    return h2;
  }

  function createParagraphCard(text) {
    const p = document.createElement('p');
    p.className = 'card';
    p.style.marginTop = '8px';
    p.textContent = text;
    return p;
  }

  function createCodeCard(jsonText) {
    const wrapper = document.createElement('div');
    wrapper.className = 'card';
    wrapper.style.marginTop = '10px';

    const pre = document.createElement('pre');
    pre.style.whiteSpace = 'pre-wrap';
    pre.style.margin = '0';
    pre.style.fontFamily = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
    pre.style.fontSize = '12px';
    pre.style.color = 'var(--text-secondary)';
    pre.textContent = jsonText;

    wrapper.appendChild(pre);
    return wrapper;
  }

  function createPrimaryLink(text, href) {
    const a = document.createElement('a');
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'modal-link';
    a.style.marginTop = '12px';
    a.textContent = text;
    return a;
  }

  function createRecommendationsCard() {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.marginTop = '10px';

    const title = document.createElement('div');
    title.style.fontWeight = '700';
    title.style.marginBottom = '6px';
    title.style.color = 'var(--accent-color)';
    title.textContent = 'Suggested MCP servers to add after research';

    const list = document.createElement('ul');
    list.style.margin = '0';
    list.style.paddingLeft = '18px';
    list.style.color = 'var(--text-secondary)';

    fetch('data/mcp_servers.json', { cache: 'no-store' })
      .then(function(response) { return response.json(); })
      .then(function(data) {
        if (!data || !Array.isArray(data.servers)) return;
        data.servers.forEach(function(server) {
          const li = document.createElement('li');
          const link = document.createElement('a');
          link.href = server.url;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.textContent = server.name + ' — ' + server.description;
          link.style.color = 'var(--accent-color)';
          link.style.textDecoration = 'none';
          li.appendChild(link);
          list.appendChild(li);
        });
      });

    card.appendChild(title);
    card.appendChild(list);
    return card;
  }

  function buildMcpSection() {
    const section = createSectionContainer();
    section.appendChild(createTitle('MCP for building agents'));

    section.appendChild(createParagraphCard(
      'Connect your MCP-enabled IDE/assistant to this documentation to research and plan your agentic architecture. Then add the suggested MCP servers to start implementing your workflow.'
    ));

    const connectConfig = '{\n  "mcpServers": {\n    "ai-infra-landscape.github.io Docs": {\n      "url": "https://gitmcp.io/dudany/ai-infra-landscape.github.io"\n    }\n  }\n}';
    section.appendChild(createCodeCard(connectConfig));

    const relatedConfig = '{\n  "mcpServers": {\n    "langchain Docs": {\n      "url": "https://gitmcp.io/langchain-ai/langchain"\n    }\n  }\n}';
    section.appendChild(createCodeCard(relatedConfig));

    section.appendChild(createRecommendationsCard());
    section.appendChild(createPrimaryLink('Open in GitMCP →', 'https://gitmcp.io/dudany/ai-infra-landscape.github.io'));

    return section;
  }

  function insertAfterResources(sectionEl) {
    const resources = document.getElementById('resources');
    if (!resources || !resources.parentNode) return;
    resources.parentNode.insertBefore(sectionEl, resources.nextSibling);
  }

  const mcpSection = buildMcpSection();
  insertAfterResources(mcpSection);
})();
