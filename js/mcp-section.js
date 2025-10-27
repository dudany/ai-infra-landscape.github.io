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

  function createTabs() {
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'mcp-tabs';

    const tabs = [
      { id: 'cursor', label: 'Cursor', icon: 'https://cursor.sh/favicon.ico' },
      { id: 'claude', label: 'Claude Desktop', icon: 'https://claude.ai/favicon.ico' },
      { id: 'windsurf', label: 'Windsurf', icon: 'https://codeium.com/favicon.ico' },
      { id: 'vscode', label: 'VSCode', icon: 'https://code.visualstudio.com/favicon.ico' },
      { id: 'cline', label: 'Cline', icon: 'https://github.com/cline/cline/blob/main/assets/icons/icon.png?raw=true' },
      { id: 'highlight', label: 'Highlight AI', icon: 'https://www.highlight.ai/favicon.ico' },
      { id: 'augment', label: 'Augment Code', icon: 'https://www.augmentcode.com/favicon.ico' },
      { id: 'msty', label: 'Msty AI', icon: 'https://msty.app/favicon.ico' }
    ];

    tabs.forEach((tab, index) => {
      const button = document.createElement('button');
      button.className = 'mcp-tab';
      button.setAttribute('data-tab', tab.id);
      if (index === 0) button.classList.add('active');
      button.onclick = () => switchTab(tab.id);
      
      if (tab.icon) {
        const icon = document.createElement('img');
        icon.className = 'mcp-tab-icon';
        icon.src = tab.icon;
        icon.alt = tab.label;
        icon.onerror = () => { icon.style.display = 'none'; };
        button.appendChild(icon);
      }
      
      const label = document.createElement('span');
      label.textContent = tab.label;
      button.appendChild(label);
      
      tabsContainer.appendChild(button);
    });

    return tabsContainer;
  }

  function switchTab(tabId) {
    document.querySelectorAll('.mcp-tab').forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-tab') === tabId);
    });
    document.querySelectorAll('.mcp-tab-content').forEach(content => {
      content.classList.toggle('active', content.getAttribute('data-tab') === tabId);
    });
  }

  function createCodeCard(jsonText) {
    const wrapper = document.createElement('div');
    wrapper.className = 'card';
    wrapper.style.marginTop = '0';

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

  function createInstructionCard(text) {
    const wrapper = document.createElement('div');
    wrapper.className = 'card';
    wrapper.style.marginTop = '0';
    wrapper.style.fontSize = '13px';
    wrapper.style.color = 'var(--text-secondary)';
    wrapper.innerHTML = text;
    return wrapper;
  }

  function createTabContent(tabId, content) {
    const container = document.createElement('div');
    container.className = 'mcp-tab-content';
    container.setAttribute('data-tab', tabId);
    if (tabId === 'cursor') container.classList.add('active');

    if (typeof content === 'string') {
      container.appendChild(createCodeCard(content));
    } else {
      container.appendChild(content);
    }

    return container;
  }

  function getTabContents() {
    const cursorConfig = `{
  "mcpServers": {
    "ai-infra-landscape.github.io Docs": {
      "url": "https://gitmcp.io/dudany/ai-infra-landscape.github.io"
    }
  }
}`;

    const claudeConfig = `{
  "mcpServers": {
    "ai-infra-landscape.github.io Docs": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://gitmcp.io/dudany/ai-infra-landscape.github.io"
      ]
    }
  }
}`;

    const windsurfConfig = `{
  "mcpServers": {
    "ai-infra-landscape.github.io Docs": {
      "serverUrl": "https://gitmcp.io/dudany/ai-infra-landscape.github.io"
    }
  }
}`;

    const vscodeConfig = `{
  "servers": {
    "ai-infra-landscape.github.io Docs": {
      "type": "sse",
      "url": "https://gitmcp.io/dudany/ai-infra-landscape.github.io"
    }
  }
}`;

    const clineConfig = `{
  "mcpServers": {
    "ai-infra-landscape.github.io Docs": {
      "url": "https://gitmcp.io/dudany/ai-infra-landscape.github.io",
      "disabled": false,
      "autoApprove": []
    }
  }
}`;

    const highlightInstructions = `<strong>Steps to add custom plugin:</strong><br><br>
1. Open Highlight AI and click the plugins icon (@ symbol) in the sidebar<br>
2. Click <strong>Installed Plugins</strong> at the top of the sidebar<br>
3. Select <strong>Custom Plugin</strong><br>
4. Click <strong>Add a plugin using a custom SSE URL</strong><br><br>
<strong>Plugin name:</strong> ai-infra-landscape.github.io Docs<br>
<strong>SSE URL:</strong> https://gitmcp.io/dudany/ai-infra-landscape.github.io`;

    const augmentConfig = `{
  "mcpServers": {
    "ai-infra-landscape.github.io Docs": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://gitmcp.io/dudany/ai-infra-landscape.github.io"
      ]
    }
  }
}`;

    const mstyInstructions = `<strong>Steps to add from JSON:</strong><br><br>
1. Copy the JSON configuration below<br>
2. Go to Msty Studio > Tools > 'Import Tools from JSON Clipboard'<br><br>
<strong>Configuration to copy:</strong>`;

    const mstyConfig = `{
  "mcpServers": {
    "ai-infra-landscape.github.io Docs": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://gitmcp.io/dudany/ai-infra-landscape.github.io"
      ]
    }
  }
}`;

    return {
      cursor: { type: 'config', content: cursorConfig, path: '~/.cursor/mcp.json' },
      claude: { type: 'config', content: claudeConfig, path: 'claude_desktop_config.json' },
      windsurf: { type: 'config', content: windsurfConfig, path: '~/.codeium/windsurf/mcp_config.json' },
      vscode: { type: 'config', content: vscodeConfig, path: '.vscode/mcp.json' },
      cline: { type: 'config', content: clineConfig, path: '~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json' },
      highlight: { type: 'instructions', content: highlightInstructions },
      augment: { type: 'config', content: augmentConfig, note: 'Use this command: npx mcp-remote https://gitmcp.io/dudany/ai-infra-landscape.github.io' },
      msty: { type: 'mixed', instructions: mstyInstructions, config: mstyConfig }
    };
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


  function createExamplePrompts() {
    const container = document.createElement('div');
    container.style.marginTop = '16px';
    container.style.marginBottom = '16px';

    const heading = document.createElement('div');
    heading.style.fontWeight = '600';
    heading.style.fontSize = '14px';
    heading.style.marginBottom = '12px';
    heading.style.color = 'var(--text-primary)';
    heading.textContent = 'Example prompts to try:';
    container.appendChild(heading);

    const prompts = [
      'Which agent observability tools are available and what can I use for production monitoring?',
      'What are the best GPU cloud options for deploying open source LLMs?',
      'Compare vector database options for RAG with filtering support.'
    ];

    prompts.forEach(prompt => {
      const promptCard = document.createElement('div');
      promptCard.className = 'card';
      promptCard.style.marginTop = '8px';
      promptCard.style.fontSize = '13px';
      promptCard.style.fontFamily = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
      promptCard.style.color = 'var(--text-secondary)';
      promptCard.style.padding = '12px';
      promptCard.textContent = prompt;
      container.appendChild(promptCard);
    });

    return container;
  }

  function buildMcpSection() {
    const section = createSectionContainer();
    section.appendChild(createTitle('MCP for building agents'));

    section.appendChild(createParagraphCard(
      'Connect your MCP-enabled IDE/assistant to this documentation to research and plan your agentic architecture. Choose your client below - connecting this GitMCP server to your client will help you to research faster, compare and start coding your project faster by connecting the other GitMCPs of each GitHub project.'
    ));

    section.appendChild(createExamplePrompts());

    section.appendChild(createTabs());

    const tabContents = getTabContents();
    const contentContainer = document.createElement('div');
    contentContainer.style.marginTop = '12px';

    Object.entries(tabContents).forEach(([tabId, data]) => {
      if (data.type === 'config') {
        const tabContent = createTabContent(tabId, data.content);
        if (data.path) {
          const pathInfo = document.createElement('div');
          pathInfo.style.fontSize = '11px';
          pathInfo.style.color = 'var(--text-muted)';
          pathInfo.style.marginTop = '6px';
          pathInfo.textContent = `Path: ${data.path}`;
          tabContent.appendChild(pathInfo);
        }
        if (data.note) {
          const noteInfo = document.createElement('div');
          noteInfo.style.fontSize = '12px';
          noteInfo.style.color = 'var(--text-secondary)';
          noteInfo.style.marginTop = '8px';
          noteInfo.textContent = data.note;
          tabContent.appendChild(noteInfo);
        }
        contentContainer.appendChild(tabContent);
      } else if (data.type === 'instructions') {
        const instructionEl = createInstructionCard(data.content);
        const tabContent = createTabContent(tabId, instructionEl);
        contentContainer.appendChild(tabContent);
      } else if (data.type === 'mixed') {
        const container = document.createElement('div');
        container.appendChild(createInstructionCard(data.instructions));
        const configDiv = document.createElement('div');
        configDiv.style.marginTop = '8px';
        configDiv.appendChild(createCodeCard(data.config));
        container.appendChild(configDiv);
        const tabContent = createTabContent(tabId, container);
        contentContainer.appendChild(tabContent);
      }
    });

    section.appendChild(contentContainer);
    section.appendChild(createPrimaryLink('Open in GitMCP →', 'https://gitmcp.io/dudany/ai-infra-landscape.github.io'));

    return section;
  }

  function insertBeforeResources(sectionEl) {
    const resources = document.getElementById('resources');
    if (!resources || !resources.parentNode) return;
    resources.parentNode.insertBefore(sectionEl, resources);
  }

  const mcpSection = buildMcpSection();
  insertBeforeResources(mcpSection);
})();
