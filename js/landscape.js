let landscapeData = null;

const LAYER_COLORS = {
    'Agent Runtime': '#ef4444',
    'Observability, Control & Evaluation': '#3b82f6',
    'Memory, Knowledge & Context': '#10b981',
    'Compute, Infrastructure & Scaling': '#f59e0b',
    'Security, Identity & Access': '#8b5cf6',
    'Real-Time & Async Operations': '#ec4899'
};

// Compute an icon from explicit icon_url or fallback to site favicon; also support icon_emoji
function createToolIconElement(tool) {
    if (tool.icon_emoji) {
        const span = document.createElement('span');
        span.className = 'tool-icon-emoji';
        span.textContent = tool.icon_emoji;
        return span;
    }

    const img = document.createElement('img');
    img.className = 'tool-icon';
    img.alt = `${tool.name} icon`;
    const url = tool.icon_url || tool.docs_url || tool.doc_link || tool.github_url || '';
    let src = '';
    try {
        if (tool.icon_url) {
            src = tool.icon_url;
        } else {
            const u = new URL(url);
            src = `${u.origin}/favicon.ico`;
        }
    } catch (e) {
        src = 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-ai-robotics-flatart-icons-outline-flatarticons.png';
    }
    img.src = src;
    img.onerror = () => {
        img.onerror = null;
        img.src = 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-ai-robotics-flatart-icons-outline-flatarticons.png';
    };
    return img;
}

// Normalize tool type into one of: open-source | oss-hosted | proprietary
function normalizeType(tool) {
    const raw = (tool.type || '').toLowerCase();
    if (raw.includes('proprietary')) return 'proprietary';
    // Heuristics for OSS + hosted
    const ossHostedNames = new Set([
        'Arize Phoenix',
        'Langfuse',
        'Weaviate',
        'Qdrant',
        'Milvus / Zilliz',
        'Helicone',
        'LangGraph',
        'LlamaIndex Agents'
    ]);
    if (tool.oss === true && (ossHostedNames.has(tool.name) ||
        /hosted|cloud|managed/i.test(tool.notes || '') ||
        /cloud|managed/i.test(tool.vendor || ''))) {
        return 'oss-hosted';
    }
    if (raw.includes('open-source') || raw.includes('open source') || raw.includes('protocol')) return 'open-source';
    return tool.oss === true ? 'open-source' : 'proprietary';
}

function formatTypeLabel(normalized) {
    if (normalized === 'oss-hosted') return 'OSS + Cloud';
    if (normalized === 'open-source') return 'Open‑source';
    return 'Proprietary';
}

function loadLandscapeData() {
    const container = document.getElementById('landscape');

    function loadJson(url) {
        return fetch(url, { cache: 'no-store' }).then((response) => {
            if (!response.ok) {
                throw new Error('HTTP ' + response.status + ' for ' + url);
            }
            return response.json();
        });
    }

    loadJson('data/tools_descriptions.json')
        .catch(() => loadJson('data/unified_landscape.json'))
        .then((data) => {
            landscapeData = transformToHierarchy(data.tools);
            renderLandscape();
        })
        .catch((err) => {
            console.error('Error loading data:', err);
            container.innerHTML = '<div class="card">Failed to load data.</div>';
        });
}

function generateColorShades(baseHex, count) {
    const hex = baseHex.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    const shades = [];
    for (let i = 0; i < count; i++) {
        const factor = 0.6 + (i / (count - 1)) * 0.4;
        const nr = Math.round(r + (255 - r) * (1 - factor));
        const ng = Math.round(g + (255 - g) * (1 - factor));
        const nb = Math.round(b + (255 - b) * (1 - factor));
        shades.push(`rgb(${nr},${ng},${nb})`);
    }
    return shades;
}

function transformToHierarchy(tools) {
    const hierarchy = {};
    
    tools.forEach(tool => {
        const layers = tool.layer || ['Uncategorized'];
        const components = tool.component || ['General'];
        
        layers.forEach(layer => {
            if (!hierarchy[layer]) {
                hierarchy[layer] = {};
            }
            
            components.forEach(component => {
                if (!hierarchy[layer][component]) {
                    hierarchy[layer][component] = [];
                }
                hierarchy[layer][component].push(tool);
            });
        });
    });
    
    return hierarchy;
}

function renderLandscape() {
    const container = document.getElementById('landscape');
    container.innerHTML = '';
    
    Object.entries(landscapeData).forEach(([layer, components]) => {
        const layerDiv = document.createElement('div');
        layerDiv.className = 'layer-section';
        const baseColor = LAYER_COLORS[layer] || '#6b7280';
        layerDiv.style.borderColor = baseColor;
        
        const layerHeader = document.createElement('div');
        layerHeader.className = 'layer-header';
        layerHeader.style.borderLeftColor = baseColor;
        layerHeader.style.color = baseColor;
        layerHeader.textContent = layer;
        layerDiv.appendChild(layerHeader);
        
        const componentCount = Object.keys(components).length;
        const componentShades = generateColorShades(baseColor, Math.max(1, componentCount));
        
        const componentGrid = document.createElement('div');
        componentGrid.className = 'component-grid';
        
        Object.entries(components).forEach(([component, tools], compIndex) => {
            const componentCard = document.createElement('div');
            componentCard.className = 'component-card';
            componentCard.style.borderColor = componentShades[compIndex];
            componentCard.style.backgroundColor = `${componentShades[compIndex]}15`;
            
            const componentTitle = document.createElement('div');
            componentTitle.className = 'component-title';
            componentTitle.style.color = componentShades[compIndex];
            componentTitle.textContent = component;
            componentCard.appendChild(componentTitle);
            
            const toolsGrid = document.createElement('div');
            toolsGrid.className = 'tools-grid';
            toolsGrid.setAttribute('data-tool-count', tools.length);
            
            tools.forEach(tool => {
                const toolCard = document.createElement('div');
                toolCard.className = 'tool-card';
                toolCard.style.borderColor = componentShades[compIndex];
                toolCard.onclick = () => openModal(tool);
                
                const icon = createToolIconElement(tool);

                const toolName = document.createElement('div');
                toolName.className = 'tool-name';
                toolName.textContent = tool.name;
                
                const toolType = document.createElement('div');
                toolType.className = 'tool-type';
                const norm = normalizeType(tool);
                toolType.textContent = formatTypeLabel(norm);
                
                toolCard.appendChild(icon);
                toolCard.appendChild(toolName);
                toolCard.appendChild(toolType);
                toolsGrid.appendChild(toolCard);
            });
            
            componentCard.appendChild(toolsGrid);
            componentGrid.appendChild(componentCard);
        });
        
        layerDiv.appendChild(componentGrid);
        container.appendChild(layerDiv);
    });
}

loadLandscapeData();

