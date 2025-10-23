class ThemeManager {
    constructor() {
        this.themes = ['auto', 'light', 'dark'];
        this.currentThemeIndex = 0;
        this.loadTheme();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.applyTheme();
        this.updateIcon();
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme && this.themes.includes(savedTheme)) {
            this.currentThemeIndex = this.themes.indexOf(savedTheme);
        }
    }

    setupEventListeners() {
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.addEventListener('click', () => {
            this.cycleTheme();
        });

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (this.getCurrentTheme() === 'auto') {
                this.applyTheme();
            }
        });
    }

    cycleTheme() {
        this.currentThemeIndex = (this.currentThemeIndex + 1) % this.themes.length;
        const theme = this.getCurrentTheme();
        localStorage.setItem('theme', theme);
        this.applyTheme();
        this.updateIcon();
    }

    getCurrentTheme() {
        return this.themes[this.currentThemeIndex];
    }

    applyTheme() {
        const root = document.documentElement;
        const theme = this.getCurrentTheme();
        
        if (theme === 'auto') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        } else {
            root.setAttribute('data-theme', theme);
        }
    }

    updateIcon() {
        const icon = document.getElementById('theme-icon');
        const theme = this.getCurrentTheme();
        
        switch (theme) {
            case 'auto':
                icon.textContent = '🌓';
                break;
            case 'light':
                icon.textContent = '☀️';
                break;
            case 'dark':
                icon.textContent = '🌙';
                break;
        }
    }
}

