const Config = require("./11ty/config.js");

console.log("Prod URL:", Config.PRODURL);
console.log("Base URL:", Config.BASEURL);
console.log("Production:", Config.ISPROD, '\n');

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/assets/fonts/");
  eleventyConfig.addWatchTarget("./src/assets/pdf/");
  eleventyConfig.addWatchTarget("./src/assets/video/");

  eleventyConfig.addPassthroughCopy({ "./src/assets/favicon/": "./" });
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("./src/assets/img/");
  eleventyConfig.addPassthroughCopy("./src/assets/pdf/");
  eleventyConfig.addPassthroughCopy("./src/assets/svg/");
  eleventyConfig.addPassthroughCopy("./src/assets/video/");

  // Use browsersync hot reload for CSS and JS
  eleventyConfig.setBrowserSyncConfig({
    files: ["dist/assets/css/*.css", "dist/assets/js/"]
  });


  /**
   * Register Filters
   * @see {@link https://www.11ty.dev/docs/filters/}
   */

  eleventyConfig.addNunjucksFilter('order', require("./11ty/filters/order.js"));
  eleventyConfig.addNunjucksFilter("absurl", require("./11ty/filters/absurl.js"));


  /**
   * Register Shortcodes
   * @see {@link https://www.11ty.dev/docs/shortcodes/}
   */

  eleventyConfig.addNunjucksAsyncShortcode("svg", require("./11ty/shortcodes/svg.js"));
  eleventyConfig.addNunjucksAsyncShortcode("img", require("./11ty/shortcodes/img.js"));
  eleventyConfig.addNunjucksAsyncShortcode("link", require("./11ty/shortcodes/link.js"));
  eleventyConfig.addNunjucksAsyncShortcode("vimeo", require("./11ty/shortcodes/vimeo.js"));
  eleventyConfig.addNunjucksAsyncShortcode("youtube", require("./11ty/shortcodes/youtube.js"));


  /**
   * Transforms
   * @see {@link https://www.11ty.dev/docs/config/#transforms}
   */

  eleventyConfig.addTransform('purge-and-inline-css', require("./11ty/transforms/purge-and-inline-css.js"));


  return {
    pathPrefix: Config.BASEURL,

    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      layouts: "layouts",
      data: "data"
    },
  };
};
