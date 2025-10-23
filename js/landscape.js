let landscapeData = null;

const FAMILY_COLORS = {
    'Core Agent Infrastructure': '#ef4444',
    'Observability, Control & Evaluation': '#3b82f6',
    'Memory, Knowledge & Context': '#10b981',
    'Compute, Infrastructure & Scaling': '#f59e0b',
    'Security, Identity & Access': '#8b5cf6',
    'Real-Time & Async Operations': '#ec4899'
};

function loadLandscapeData() {
    const container = document.getElementById('landscape');
    fetch('data/unified_landscape.json', { cache: 'no-store' })
        .then(response => response.json())
        .then(data => {
            landscapeData = transformToHierarchy(data.tools);
            renderLandscape();
            generateMermaidDiagram(landscapeData);
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
        const families = tool.family || ['Uncategorized'];
        const categories = tool.category || ['General'];
        
        families.forEach(family => {
            if (!hierarchy[family]) {
                hierarchy[family] = {};
            }
            
            categories.forEach(category => {
                if (!hierarchy[family][category]) {
                    hierarchy[family][category] = [];
                }
                hierarchy[family][category].push(tool);
            });
        });
    });
    
    return hierarchy;
}

function renderLandscape() {
    const container = document.getElementById('landscape');
    container.innerHTML = '';
    
    Object.entries(landscapeData).forEach(([family, categories]) => {
        const familyDiv = document.createElement('div');
        familyDiv.className = 'family-section';
        const baseColor = FAMILY_COLORS[family] || '#6b7280';
        familyDiv.style.borderColor = baseColor;
        
        const familyHeader = document.createElement('div');
        familyHeader.className = 'family-header';
        familyHeader.style.borderLeftColor = baseColor;
        familyHeader.style.color = baseColor;
        familyHeader.textContent = family;
        familyDiv.appendChild(familyHeader);
        
        const categoryCount = Object.keys(categories).length;
        const categoryShades = generateColorShades(baseColor, Math.max(1, categoryCount));
        
        const categoryGrid = document.createElement('div');
        categoryGrid.className = 'category-grid';
        
        Object.entries(categories).forEach(([category, tools], catIndex) => {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'category-card';
            categoryCard.style.borderColor = categoryShades[catIndex];
            categoryCard.style.backgroundColor = `${categoryShades[catIndex]}15`;
            
            const categoryTitle = document.createElement('div');
            categoryTitle.className = 'category-title';
            categoryTitle.style.color = categoryShades[catIndex];
            categoryTitle.textContent = category;
            categoryCard.appendChild(categoryTitle);
            
            const toolsGrid = document.createElement('div');
            toolsGrid.className = 'tools-grid';
            toolsGrid.setAttribute('data-tool-count', tools.length);
            
            tools.forEach(tool => {
                const toolCard = document.createElement('div');
                toolCard.className = 'tool-card';
                toolCard.style.borderColor = categoryShades[catIndex];
                toolCard.onclick = () => openModal(tool);
                
                const toolName = document.createElement('div');
                toolName.className = 'tool-name';
                toolName.textContent = tool.name;
                
                const toolType = document.createElement('div');
                toolType.className = 'tool-type';
                toolType.textContent = tool.type || 'tool';
                
                toolCard.appendChild(toolName);
                toolCard.appendChild(toolType);
                toolsGrid.appendChild(toolCard);
            });
            
            categoryCard.appendChild(toolsGrid);
            categoryGrid.appendChild(categoryCard);
        });
        
        familyDiv.appendChild(categoryGrid);
        container.appendChild(familyDiv);
    });
}

loadLandscapeData();

