/**
 * Plugin config: eleventy-img
 * Provides the {% img %} shortcode.
 * 
 * Assumes base img directory is ./src/assets/img/
 * 
 * @param {string} mandatory - image path and filename
 * @param {string} mandatory - alt text
 * 
 * Usage: {% img "folder/filename.jpg", "alt text" %}
 * Output:
  <picture>
    <source type="image/webp" srcset="/assets/img/min/filename-1024.webp 1024w, /assets/img/min/filename-1208.webp 1208w" sizes="100vw">
    <source type="image/png" srcset="/assets/img/min/filename-1024.png 1024w, /assets/img/min/filename-1208.png 1208w" sizes="100vw">
    <img alt="Alt Text" loading="lazy" decoding="async" src="/assets/img/min/filename-1024.png" width="1208" height="627">
  </picture>
 */

const Image = require("@11ty/eleventy-img");
const Config = require("../config.js");

module.exports = async function (src, alt) {
  let metadata = await Image('./src/assets/img/' + src, {
    widths: [null, 1024, 2048],
    formats: [null, "webp"],
    urlPath: Config.BASEURL + "/assets/img/min",
    outputDir: "dist/assets/img/min"
  });

  let imageAttributes = {
    alt,
    sizes: "100vw",
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}
