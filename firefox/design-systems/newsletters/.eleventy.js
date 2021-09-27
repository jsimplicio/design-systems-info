

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('favicon')
  return {
    passthroughFileCopy: true
  }
}
