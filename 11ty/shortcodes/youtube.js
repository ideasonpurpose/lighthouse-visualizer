/**
 * Shortcode config: youtube
 * Provides the {% youtube %} shortcode.
 * 
 * Wraps the YouTube iframe in a .video figure
 * 
 * @param {string} mandatory - video id
 * @param {string} optional - video caption
 * @param {int} optional - aspect ratio
 * 
 * Usage: {% youtube "UsFCsRbYDyA", "Caption", 56.25 %}
 * Output:
   <figure class="media">
    <div class="video" style="padding-top:56.25%">
      <iframe 
        src="https://www.youtube-nocookie.com/embed/UsFCsRbYDyA" 
        width="560" 
        height="315" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    </div>
    <figcaption>Caption</figcaption>
  </figure>
 */

module.exports = async function (videoId, figcaption, aspectRatio) {
  let ar = aspectRatio || 56.25;
  let caption = '';

  if (figcaption) {
    caption = `<figcaption>${figcaption}</figcaption>`;
  }

  return `<figure class="media">
    <div class="video" style="padding-top:${ar}%">
      <iframe 
        src="https://www.youtube-nocookie.com/embed/${videoId}" 
        width="560" 
        height="315" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    </div>
    ${caption}
  </figure>`;
};
