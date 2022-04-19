/**
 * Configuration variables
 * 
 * Config.PRODURL
 * Config.BASEURL
 * Config.ISPROD
 */

const isProduction = process.env.ELEVENTY_ENV === 'production';

// Settings paths *must not* end in /

module.exports = {
  ISPROD: isProduction,

  // Internal Stage Settings
  BASEURL: isProduction ? "/lighthouse-visualizer/dist" : "",
  PRODURL: isProduction ? "https://ideasonpurpose.github.io" : "",
};
