const { exec } = require("child_process");
const https = require("https");
const parser = require('xml2json');
const config = require('../config.js');


// Auth information
// https://github.com/GoogleChrome/lighthouse/blob/master/docs/authenticated-pages.md
const user = config.user;
const pass = config.pass;
const auth = btoa(unescape(encodeURIComponent(user + ':' + pass)));
const headers = '{\\"Authorization\\":\\" Basic ' + auth + '\\"}';
const extraHeaders = user && pass ? '--extra-headers=\"' + JSON.stringify(headers) + '\"' : '';


function runReport(cmd) {
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}


// 1. Get all site pages from sitemap.xml, 
// 2. Turn them into a comma-delimited string
// 3. Run Batch Lighthouse

const loginURL = user && pass ? config.PRODURL.replace('//', '//' + user + ':' + pass + '@') : config.PRODURL;
let sitemapURL = loginURL + config.BASEURL + '/sitemap.xml';

console.log('Fetching', sitemapURL);

https.get(sitemapURL, res => {
  res.on('data', function (body) {
    var json = JSON.parse(parser.toJson(body));
    var urls = json.urlset.url;
    var pages = [];

    for (var url in urls) {
      pages.push(urls[url].loc);
    }

    // Run Batch report
    const cmd = 'lighthouse-batch -s ' + pages.join(',') + ' --no-report --html --out "./reports/lighthouse" -p "--preset=desktop ' + extraHeaders + '"';
    runReport(cmd);
  });
});
