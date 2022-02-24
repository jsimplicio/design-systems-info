

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('firefox')
  eleventyConfig.addPassthroughCopy('favicon')
  eleventyConfig.addPassthroughCopy('fonts')

  return {
    passthroughFileCopy: true
  }
}
