/**
 * Shortcode config: link
 * Provides the {% link %} shortcode.
 * 
 * Transforms links markup according to their destination.
 * 
 * @param {string} mandatory - URL to transform
 * @param {string} mandatory - Link text
 * 
 * Usage:
 * External link: {% link "http://example.com", "External link" %}
 * Output: 
 * <a href="http://example.com" target="_blank" rel="external noopener" 
    aria-describedby="extdisclaimer">External link<span class="a11y">opens in a new window</span></a>
 * 
 * Internal link: {% link "/test", "Relative Link" %} (will add trailing slash if missing, preventing double-slash)
 * Output: 
 * <a href="/baseurl/test/">Relative Link</a>
 */

const URL = require(`@11ty/eleventy/src/Filters/Url`);

module.exports = async function (url, text) {
  const isExternal = url.startsWith('http');
  let anchor;

  if (isExternal) {
    anchor = `<a 
    href="${url}" 
    target="_blank" 
    rel="external noopener" 
    aria-describedby="extdisclaimer">${text}<span class="a11y">opens in a new window</span></a>`;
  }
  else {
    const href = URL(url + '/');
    anchor = `<a href="${href}">${text}</a>`;
  }

  return anchor;
};
