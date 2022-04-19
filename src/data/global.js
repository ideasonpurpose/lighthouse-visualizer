/**
 * Site wide utility variables
 */

module.exports = function() {
  return {
    environment: process.env.ELEVENTY_ENV,
    disallow_search_engines: false,

    // Site data
    site_name: '',
    meta_title: '',
    meta_description: '',
    meta_image: '',

    // great for cache busting assets
    buildtime: Date.now()
  }
};
