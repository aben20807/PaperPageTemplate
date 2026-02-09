// SVG icons (inline to avoid external requests)
const icons = {
    github: '<svg viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>',
    paper: '<svg viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>',
    cube: '<svg viewBox="0 0 512 512"><path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z"/></svg>',
    database: '<svg viewBox="0 0 448 512"><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/></svg>',
    arrow: '<svg viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>'
};

function getIcon(name) {
    return icons[name] || '';
}

// Load all data from config.json
async function loadData() {
    try {
        const response = await fetch('data/config.json');
        const data = await response.json();

        // Update footer
        const footerText = document.getElementById('footer-text');
        if (footerText && data.footer) {
            footerText.textContent = `© ${data.footer.copyright_year} ${data.footer.project_name}. ${data.footer.text}`;
            footerText.classList.remove('placeholder');
        }

        // Update canonical URL
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical && data.site_url) {
            canonical.href = data.site_url;
        }

        // Update meta description from config
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription && data.meta_description) {
            metaDescription.setAttribute('content', data.meta_description);
        }

        // Update page title
        if (data.title) {
            document.title = data.title;
        }

        // Set paper title
        const paperTitle = document.getElementById('paper-title');
        paperTitle.textContent = data.title;
        paperTitle.classList.remove('placeholder');

        // Set authors with affiliations and ORCID links
        const authorsElement = document.getElementById('authors');
        if (Array.isArray(data.authors)) {
            const authorNames = data.authors.map(author => {
                const affiliationNumbers = author.affiliations.map(num => `${num}`).join(',');
                const authorName = author.orcid 
                    ? `<a href="https://orcid.org/${author.orcid}" target="_blank" rel="noopener noreferrer" class="author-link">${author.name}</a>`
                    : author.name;
                return `<span class="author-item">${authorName}<sup>${affiliationNumbers}</sup></span>`;
            }).join(', ');
            authorsElement.innerHTML = authorNames;
        } else {
            authorsElement.textContent = data.authors;
        }
        authorsElement.classList.remove('placeholder');

        // Set affiliations
        const affiliationsElement = document.getElementById('affiliations');
        if (data.affiliations && data.affiliations.length > 0) {
            const affiliationsList = data.affiliations.map((affiliation, index) => 
                `<sup>${index + 1}</sup>${affiliation}`
            ).join('</br>');
            affiliationsElement.innerHTML = affiliationsList;
            affiliationsElement.classList.remove('placeholder');
        } else {
            affiliationsElement.style.display = 'none';
        }

        // Render links with SVG icons and separators
        const linkButtons = document.getElementById('link-buttons');
        linkButtons.innerHTML = data.links.map((link, index) => {
            const icon = getIcon(link.icon);
            const button = `<a href="${link.url}" class="link-btn" target="_blank" rel="noopener noreferrer">${icon}${link.name}</a>`;
            const separator = index < data.links.length - 1 ? '<span class="link-separator">|</span>' : '';
            return button + separator;
        }).join('');

        // Set abstract
        const abstractText = document.getElementById('abstract-text');
        abstractText.innerHTML = data.abstract;
        abstractText.classList.remove('placeholder');

        // Set overview
        const overviewText = document.getElementById('overview-text');
        overviewText.innerHTML = data.overview;
        overviewText.classList.remove('placeholder');

        // Render results with images only when available
        const resultsContent = document.getElementById('results-content');
        resultsContent.innerHTML = data.results.map(result => {
            const descriptionHtml = result.description ? `<p">${result.description}</p>` : '';
            const imageHtml = result.image
                ? `<img src="${result.image}" alt="${result.title}" loading="lazy" width="800" height="450">`
                : '';

            return `
                <div class="result-card">
                    <h3>${result.title}</h3>
                    ${descriptionHtml}
                    ${imageHtml}
                </div>
            `;
        }).join('');

    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', loadData);