/**
 * Filter: order
 * Orders a collection by frontmatter `order` key
 */

module.exports = function (values) {
  return values.slice().sort((a, b) => a.data.order - b.data.order);
}
