function openModal(tool) {
    const name = tool.name || 'Unknown';
    const summary = tool.summary || 'No description available';
    const docsUrl = tool.docs_url || tool.doc_link || '#';
    
    document.getElementById('modal-logo').textContent = tool.type ? tool.type[0].toUpperCase() : '⚙';
    document.getElementById('modal-name').textContent = name;
    
    let descHtml = `<strong>Type:</strong> ${tool.type || 'N/A'}<br>`;
    if (tool.vendor) descHtml += `<strong>Vendor:</strong> ${tool.vendor}<br>`;
    if (tool.oss !== undefined) descHtml += `<strong>Open Source:</strong> ${tool.oss ? 'Yes' : 'No'}<br>`;
    if (tool.last_known_update) descHtml += `<strong>Updated:</strong> ${tool.last_known_update}<br>`;
    descHtml += `<br><p>${summary}</p>`;
    if (tool.notes) descHtml += `<p><em>${tool.notes}</em></p>`;
    
    document.getElementById('modal-description').innerHTML = descHtml;
    
    const linkBtn = document.getElementById('modal-link');
    if (docsUrl && docsUrl !== '#') {
        linkBtn.href = docsUrl;
        linkBtn.target = '_blank';
        linkBtn.textContent = tool.github_url ? 'Visit Docs →' : 'Learn More →';
        linkBtn.style.display = 'inline-block';
    } else {
        linkBtn.style.display = 'none';
    }
    
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

