// Initialize Mermaid
mermaid.initialize({ 
    startOnLoad: false,
    theme: 'dark',
    themeVariables: {
        primaryColor: '#4da6ff',
        primaryTextColor: '#fff',
        primaryBorderColor: '#4da6ff',
        lineColor: '#8aa4c4',
        secondaryColor: '#1a2940',
        tertiaryColor: '#0a1628',
        fontFamily: 'Inter, sans-serif'
    }
});

// Register custom icons for architecture diagrams
mermaid.registerIconPacks([
    {
        name: 'mdi',
        loader: () =>
            fetch('https://api.iconify.design/collection?prefix=mdi')
                .then((res) => res.json())
                .then((data) => data),
    },
    {
        name: 'fa',
        loader: () =>
            fetch('https://api.iconify.design/collection?prefix=fa')
                .then((res) => res.json())
                .then((data) => data),
    }
]);

// Initialize theme manager
const themeManager = new ThemeManager();

