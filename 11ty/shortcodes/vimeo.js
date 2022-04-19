/**
 * Shortcode config: vimeo
 * Provides the {% vimeo %} shortcode.
 * 
 * Wraps the Vimeo iframe in a .video figure
 * 
 * @param {string} mandatory - video id
 * @param {string} optional - video caption
 * @param {int} optional - aspect ratio
 * 
 * Usage: {% vimeo "336812660", "Caption", 56.25 %}
 * Output:
   <figure class="media">
    <div class="video" style="padding-top:56.25%">
      <iframe 
        src="https://player.vimeo.com/video/336812660?title=0&byline=0&portrait=0" 
        width="640" 
        height="270" 
        title="Vimeo video player" 
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
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
        src="https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0" 
        width="640" 
        height="270" 
        title="Vimeo video player" 
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen></iframe>
    </div>
    ${caption}
  </figure>`;
};
