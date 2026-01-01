# PaperPageTemplate

A fast, SEO-optimized one-page static website template for academic research papers and open-source projects. Perfect for creating professional landing pages with paper details, author information, and project links.

## Features

- **Academic Paper Layout**: Title, authors with affiliations, ORCID links, abstract, overview, and results
- **Resource Links**: Configurable buttons with icons (GitHub, Paper, Model, Dataset)
- **Performance Optimized**: Lighthouse score optimized with inline critical CSS, async loading, and CLS prevention
- **Single Config File**: All content managed through `data/config.json`
- **SEO Ready**: Configurable meta tags, sitemap, robots.txt, canonical URLs
- **Analytics**: Google Analytics 4 integration with privacy policy page
- **Responsive Design**: Clean gray color scheme, mobile-friendly
- **Zero Dependencies**: Pure HTML/CSS/JS with inline SVG icons

## Project Structure

```plaintext
one-page/
├── index.html              # Main page with critical CSS
├── privacy.html            # Privacy policy page
├── favicon.svg             # Site favicon
├── css/
│   └── styles.css          # Full stylesheet (async loaded)
├── js/
│   └── main.js             # Content loader with inline SVG icons
├── data/
│   └── config.json         # Single configuration file for all content
├── images/                 # Result images directory
├── robots.txt              # Search engine crawler instructions
└── sitemap.xml             # Site structure for SEO
```

## Quick Start

1. **Use this template > Create a new repository** or **Fork**
2. **Edit `data/config.json`** with your content:
   - Paper title and authors (with affiliations and ORCID)
   - Project links (GitHub, Paper, Model, Dataset)
   - Abstract and overview text
   - Result images and descriptions
   - Google Analytics ID
   - SEO meta tags

3. **Add result images** to the `images/` directory

4. **Deploy** to GitHub Pages (Remember to enable GitHub Pages: Settings > Pages > Branch > select `master` > Save)

## Configuration

All content is managed through `data/config.json`:

```json
{
  "ga_measurement_id": "GA_MEASUREMENT_ID",
  "site_url": "https://yourwebsite.com/",
  "meta_description": "Your research paper description",
  "title": "Your Research Paper Title",
  "authors": [
    {"name": "Author One", "affiliations": [1], "orcid": "0000-0001-2345-6789"},
    {"name": "Author Two", "affiliations": [2]}
  ],
  "affiliations": [
    "University A, Department",
    "University B, Lab"
  ],
  "links": [
    {"name": "Code", "url": "https://github.com/...", "icon": "github"},
    {"name": "Paper", "url": "https://...", "icon": "paper"}
  ],
  "abstract": "Your paper abstract...",
  "overview": "Your paper overview...",
  "results": [
    {"title": "Result 1", "description": "...", "image": "images/result1.png"}
  ]
}
```

### Available Icons

- `github` - GitHub repositories
- `paper` - Academic papers/PDFs
- `cube` - Models (e.g., HuggingFace)
- `database` - Datasets
- `arrow` - Navigation/back buttons

### Author Format

Authors support:

- **Multiple affiliations**: `"affiliations": [1, 2]`
- **ORCID links** (optional): `"orcid": "0000-0001-2345-6789"`

## Performance

Optimizations included:

- Critical CSS inlined in `<head>`
- Async CSS loading with `media="print"` trick
- Deferred JavaScript execution
- Inline SVG icons (no external requests)
- Lazy loading images
- Placeholder elements to prevent CLS (Cumulative Layout Shift)
- Minimal, semantic HTML

## License

Apache License 2.0, see [LICENSE](https://github.com/aben20807/PaperPageTemplate/blob/master/LICENSE) for details
