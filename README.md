# AI Agents Infrastructure Landscape

A comprehensive, interactive landscape of the AI agent infrastructure ecosystem for 2025.

## Project Structure

```
ai-infra-landscape.github.io/
├── index.html              # Main HTML file
├── styles.css              # All CSS styles
├── data/
│   ├── unified_landscape.json    # Main data file
│   └── sample_data/              # Sample data files
├── js/
│   ├── init.js                   # Mermaid initialization
│   ├── theme-manager.js          # Theme switching logic
│   ├── landscape.js              # Landscape grid rendering
│   ├── mermaid-diagram.js        # Architecture diagram generation
│   └── modal.js                  # Modal window functionality
└── README.md               # This file
```

## File Responsibilities

### `index.html`
- Main HTML structure
- Header and intro content
- Resources section
- Modal markup
- Script imports

### `styles.css`
- All CSS styling
- Theme variables (dark/light modes)
- Component styles (cards, modals, grids)
- Responsive design rules

### `js/init.js`
- Mermaid library initialization
- Icon pack registration
- Theme manager instantiation

### `js/theme-manager.js`
- `ThemeManager` class
- Theme switching logic (auto/light/dark)
- LocalStorage persistence
- Theme icon updates

### `js/landscape.js`
- Main landscape data loading
- Hierarchy transformation
- Grid rendering
- Color generation for families/categories
- Tool card creation

### `js/mermaid-diagram.js`
- Architecture diagram generation
- Family and category icon mapping
- View toggle functionality (Grid ↔ Diagram)
- Mermaid code generation

### `js/modal.js`
- Tool detail modal
- Modal open/close handlers
- Keyboard shortcuts (ESC to close)
- Click outside to close

## Features

- **Dual View Modes**: Toggle between grid view and architecture diagram
- **Theme Support**: Auto/Light/Dark theme switching
- **Hierarchical Organization**: Families → Categories → Tools
- **Color-Coded**: Each family has its own color scheme
- **Interactive**: Click tools for detailed information
- **Responsive**: Works on desktop and mobile

## Development

To work on this project:

1. Edit the relevant file based on what you're changing:
   - Visual styles → `styles.css`
   - Theme behavior → `js/theme-manager.js`
   - Grid layout/rendering → `js/landscape.js`
   - Diagram view → `js/mermaid-diagram.js`
   - Tool modals → `js/modal.js`

2. Test locally by opening `index.html` in a browser

3. Data is loaded from `data/unified_landscape.json`

## Architecture Diagram

The architecture diagram uses Mermaid's `architecture-beta` syntax with:
- Grouped hierarchies (families as groups)
- Relevant icons for each service
- Nested category services within family groups

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Uses CSS Grid and Flexbox

