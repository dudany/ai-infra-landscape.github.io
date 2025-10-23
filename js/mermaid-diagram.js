async function generateMermaidDiagram(landscapeData) {
    if (!landscapeData) return;
    
    let mermaidCode = 'architecture-beta\n';
    
    const familyIconMap = {
        'Core Agent Infrastructure': 'server',
        'Observability, Control & Evaluation': 'internet',
        'Memory, Knowledge & Context': 'database',
        'Compute, Infrastructure & Scaling': 'cloud',
        'Security, Identity & Access': 'disk',
        'Real-Time & Async Operations': 'internet'
    };
    
    const categoryIconMap = {
        'Cross or Multi-Agent Communication Protocols': 'internet',
        'Tool and Data Access Protocols': 'disk',
        'Agent Orchestration and Frameworks': 'server',
        'Prompt Management and Evaluation': 'disk',
        'Monitoring and Observability': 'internet',
        'Context Optimization and Memory': 'database',
        'MCP Gateways and LLM Gateways': 'internet',
        'Fine-Tuning and Experimentation': 'disk',
        'Authentication': 'disk',
        'Agent Data Distribution / Map-Reduce': 'cloud',
        'Compute and Inference': 'server',
        'Vector Databases and Knowledge Stores': 'database'
    };
    
    mermaidCode += '    group infrastructure[AI Agent Infrastructure]\n\n';
    
    let nodeIndex = 0;
    
    Object.entries(landscapeData).forEach(([family, categories]) => {
        const familyId = `family${nodeIndex}`;
        const familyIcon = familyIconMap[family] || 'disk';
        const escapedFamily = family
            .replace(/[&]/g, 'and')
            .replace(/,/g, '')
            .replace(/\//g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
        
        mermaidCode += `    group ${familyId}(${familyIcon})[${escapedFamily}] in infrastructure\n`;
        
        let catIndex = 0;
        Object.entries(categories).forEach(([category, tools]) => {
            const categoryId = `cat${nodeIndex}_${catIndex}`;
            const escapedCategory = category
                .replace(/[&]/g, 'and')
                .replace(/,/g, '')
                .replace(/\//g, ' ')
                .replace(/-/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();
            const categoryIcon = categoryIconMap[category] || 'disk';
            
            mermaidCode += `    service ${categoryId}(${categoryIcon})[${escapedCategory}] in ${familyId}\n`;
            catIndex++;
        });
        
        nodeIndex++;
    });

    const diagramElement = document.getElementById('mermaid-diagram');
    const id = 'mermaid-' + Date.now();
    console.log(mermaidCode);
    
    const { svg } = await mermaid.render(id, mermaidCode);
    diagramElement.innerHTML = svg;
}

let isGridView = true;

function toggleView() {
    const landscapeDiv = document.getElementById('landscape');
    const mermaidDiv = document.getElementById('mermaid-container');
    const viewToggle = document.getElementById('view-toggle');
    const viewIcon = document.getElementById('view-icon');
    const viewText = document.getElementById('view-text');
    
    isGridView = !isGridView;
    
    if (isGridView) {
        landscapeDiv.style.display = 'grid';
        mermaidDiv.classList.remove('active');
        viewIcon.textContent = '📊';
        viewText.textContent = 'Diagram';
        viewToggle.classList.remove('active');
    } else {
        landscapeDiv.style.display = 'none';
        mermaidDiv.classList.add('active');
        viewIcon.textContent = '📦';
        viewText.textContent = 'Grid';
        viewToggle.classList.add('active');
    }
}

document.getElementById('view-toggle').addEventListener('click', toggleView);

