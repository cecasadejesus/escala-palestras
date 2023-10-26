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
</style>`;

document.body.insertAdjacentHTML('beforeend', erasePseudoElements);
