/**
 * Plugin config: eleventy-svg
 * Provides the {% svg %} shortcode.
 * 
 * Assumes base svg directory is ./src/assets/svg/
 * Based on the svgContents filter at https://github.com/brob/eleventy-plugin-svg-contents
 * 
 * @param {string} mandatory - svg path and filename
 * @param {string} optional - additional classes
 * 
 * Usage: {% svg "folder/filename.svg", 'custom-classname' %}
 * Output: SVG file contents + extra classname if argument is provided
 */

const Svg = require("../plugins/eleventy-svg.js");

module.exports = async function (fileurl, className, extractTag = 'svg') {
  const getSVGContents = new Svg('/src/assets/svg/' + fileurl, className, extractTag);
  return getSVGContents.getSvg();
};
