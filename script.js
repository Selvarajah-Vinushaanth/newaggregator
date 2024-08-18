document.addEventListener("DOMContentLoaded", function() {
    const newsContainer = document.getElementById('news-container');
    const newsLinks = [
        'https://divaina.lk/',
        'https://www.lankadeepa.lk/',
        'https://www.adaderana.lk/',
        'https://www.hirunews.lk/',
        'https://www.dinamina.lk/',
        'https://sarasaviya.lk/'
        
    ];

    newsLinks.forEach(link => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <h2><a href="${link}" target="_blank">${getDomainName(link)}</a></h2>
            <p>Latest news from ${getDomainName(link)}</p>
        `;
        newsContainer.appendChild(newsItem);
    });
});

function getDomainName(url) {
    return new URL(url).hostname.replace(/^www\./, '');
}
