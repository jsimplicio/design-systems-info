

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('favicon')
  eleventyConfig.addPassthroughCopy('fonts')

  return {
    passthroughFileCopy: true
  }
}
