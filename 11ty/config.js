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

  // Extranet credentials
  // user: 'EXTRANET_USER',
  // pass: 'EXTRANET_PASSWORD', 

  // Internal Stage
  BASEURL: isProduction ? "/PROJECT_NAME/internalreview" : "",
  PRODURL: isProduction ? "https://client.ideasonpurpose.com" : "",

  // Client Stage
  // BASEURL: isProduction ? "/PROJECT_NAME/clientreview" : "",
  // PRODURL: isProduction ? "https://client.ideasonpurpose.com" : "",

  // Production
  // BASEURL: isProduction ? "/" : "",
  // PRODURL: isProduction ? "https://clientdomain.com" : "",
};
