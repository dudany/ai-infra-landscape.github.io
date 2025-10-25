// Create a GitHub star badge from a GitHub URL
function createStarBadge(githubUrl) {
    if (!githubUrl) return null;
    const match = githubUrl.match(/github\.com\/([^\/]+)\/([^\/\?#]+)/);
    if (!match) return null;
    
    const owner = match[1];
    const repo = match[2];
    
    const img = document.createElement('img');
    img.className = 'star-badge';
    img.src = `https://img.shields.io/github/stars/${owner}/${repo}?style=flat-square&logo=github&labelColor=333&color=blue`;
    img.alt = `${owner}/${repo} stars`;
    return img;
}

function openModal(tool) {
    const name = tool.name || 'Unknown';
    const summary = tool.summary || 'No description available';
    const docsUrl = tool.docs_url || tool.doc_link || tool.github_url || '#';

    // Icon
    const logo = document.getElementById('modal-logo');
    logo.innerHTML = '';
    if (tool.icon_emoji) {
        const span = document.createElement('span');
        span.textContent = tool.icon_emoji;
        span.style.fontSize = '40px';
        span.style.lineHeight = '48px';
        span.style.display = 'inline-block';
        span.style.width = '48px';
        span.style.height = '48px';
        span.style.textAlign = 'center';
        logo.appendChild(span);
    } else {
        const img = document.createElement('img');
        let src = '';
        try {
            if (tool.icon_url) {
                src = tool.icon_url;
            } else {
                const u = new URL(tool.docs_url || tool.github_url || '');
                src = `${u.origin}/favicon.ico`;
            }
        } catch (e) {
            src = 'https://img.icons8.com/fluency-systems-regular/48/bot.png';
        }
        img.src = src;
        img.alt = `${name} icon`;
        img.style.width = '48px';
        img.style.height = '48px';
        img.style.borderRadius = '8px';
        img.onerror = () => {
            img.onerror = null;
            img.src = 'https://img.icons8.com/fluency-systems-regular/48/bot.png';
        };
        logo.appendChild(img);
    }

    document.getElementById('modal-name').textContent = name;

    const components = Array.isArray(tool.component) ? tool.component.join(', ') : (tool.component || '');
    const layers = Array.isArray(tool.layer) ? tool.layer.join(', ') : (tool.layer || '');

    const normalizeType = (t) => {
        const raw = (t || '').toLowerCase();
        if (raw.includes('proprietary')) return 'Proprietary';
        if (raw.includes('oss-hosted')) return 'OSS + Cloud';
        if (raw.includes('open-source') || raw.includes('open source') || raw.includes('protocol')) return 'Open‑source';
        return t || 'N/A';
    };

    let descHtml = '';
    descHtml += `<strong>Type:</strong> ${normalizeType(tool.type)}<br>`;
    if (layers) descHtml += `<strong>Layer:</strong> ${layers}<br>`;
    if (components) descHtml += `<strong>Component:</strong> ${components}<br>`;
    if (tool.license) descHtml += `<strong>License:</strong> ${tool.license}<br>`;
    if (tool.vendor) descHtml += `<strong>Vendor:</strong> ${tool.vendor}<br>`;
    if (tool.last_known_update) descHtml += `<strong>Updated:</strong> ${tool.last_known_update}<br>`;
    if (tool.github_url) {
        const starBadge = createStarBadge(tool.github_url);
        const badgeHtml = starBadge ? `<img src="${starBadge.src}" alt="stars" style="height: 18px; vertical-align: middle; margin-left: 8px;">` : '';
        descHtml += `<strong>GitHub:</strong> <a href="${tool.github_url}" target="_blank">${tool.github_url}</a>${badgeHtml}<br>`;
    }
    if (tool.docs_url) descHtml += `<strong>Docs:</strong> <a href="${tool.docs_url}" target="_blank">${tool.docs_url}</a><br>`;
    descHtml += `<br><p>${summary}</p>`;
    if (tool.notes) descHtml += `<p><em>${tool.notes}</em></p>`;

    document.getElementById('modal-description').innerHTML = descHtml;

    const linkBtn = document.getElementById('modal-link');
    if (docsUrl && docsUrl !== '#') {
        linkBtn.href = docsUrl;
        linkBtn.target = '_blank';
        linkBtn.textContent = 'Visit →';
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

