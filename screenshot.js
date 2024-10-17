wpadminbar.remove()
masthead.remove()
secondary.remove()
colophon.remove()

const author = document.querySelector('.entry-meta');
const pagination = document.querySelector('.nav-single');

author.remove()
pagination.remove()

const siteArticle = document.querySelector('.site-content article');
siteArticle.style.borderBottom = "none";
siteArticle.style.marginBottom = "0";
siteArticle.style.paddingBottom = "0";


const pageTopBg = document.querySelector('.post-template-default');
pageTopBg.style.background = "none";

page.style.background = "none";
primary.style.width = "100%";

const site = document.querySelector('.site');

const erasePseudoElements = `<style>
.site:before,
.site:after {
	display: none;
}

body.custom-font-enabled {
    font-family: Georgia, serif;
    color: black;
}

.entry-content table, .comment-content table,
.entry-content th, .comment-content th {
    color: black;
}

.entry-content table.escala-palestras {
    font-size: 1.2rem;
}

.escala-palestras td {
    vertical-align: top;
    font-size: 1.2rem;
    line-height: 1.4;
}

.escala-palestras th:first-child {
    width: 100px;
}

.escala-palestras th:nth-child(2) {
    width: 120px;
}

.escala-palestras th:nth-child(3) {
    width: 100px;
}

.escala-palestras span.chip {
    display: inline-block;
    line-height: 1.4;
}

.escala-palestras td{
	line-height: 1.4;
}
</style>`;

document.body.insertAdjacentHTML('beforeend', erasePseudoElements);
