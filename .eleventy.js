

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('firefox')
  eleventyConfig.addPassthroughCopy('favicon')

  return {
    passthroughFileCopy: true
  }
}
