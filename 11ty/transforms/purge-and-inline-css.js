/**
 * Transform: purge-and-inline-css
 * 
 * Remove any unused CSS on the page and inline the remaining CSS in the <head>.
 * @see {@link https://github.com/FullHuman/purgecss}
 */

const { PurgeCSS } = require('purgecss');
const Config = require("../config.js");

module.exports = async function (content, outputPath) {
  if (process.env.ELEVENTY_ENV !== 'production' || !outputPath.endsWith('.html')) {
    return content;
  }

  const purgeCSSResults = await new PurgeCSS().purge({
    content: [{ raw: content }],
    css: ['src/includes/min/main.css'],
    defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
    keyframes: true,
    safelist: {
      greedy: [
        /^menu/,
        /^search/,
        /^js/,
        /^is/,
        /^has/,
        /^move/,
        /inview/,
        /iop/,
        /a11y/,
        /slick/,
        /class/,
        /target/,
        /path/,
        /circle/,
        /stroke/,
        /fill/,
        /rowspan/,
        /colspan/
      ]
    }
  });

  /**
   * purgeCSS did a great job shrinking the size of CSS
   * and now we move on to inlining all the CSS in the head section of each page.
   * 
   * In CSS, all external assets are being pulled from /assets/ as a relative path.
   * 
   * The replaceAll method below makes sure all assets loaded in the CSS
   * are being pulled in from the true base url of the website.
   * 
   * E.G. if fonts live at http://client.iopclient.com/annual-report/assets/fonts/
   * the CSS paths will transform to /annual-report/assets/fonts/
   * 
   * This ensures paths are always correct in dev mode as well as production.
   * It works with any level of nesting, as long as the BASEURL var is set correctly.
   */

  let results = purgeCSSResults[0].css;

  if(Config.BASEURL != '/' && Config.BASEURL != '') {
    results = results.replaceAll('/assets/', Config.BASEURL + '/assets/');
  }

  return content.replace('<!-- INLINE CSS-->', '<style>' + results + '</style>');
}
