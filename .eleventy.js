module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addCollection("articles", function(collectionApi) {
    return collectionApi.getFilteredByTag("articles").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("tabloids", function(collectionApi) {
    return collectionApi.getFilteredByTag("tabloids").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addFilter("dateDisplay", function(date) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric"
    });
  });

  eleventyConfig.addFilter("limit", function(arr, n) {
    return arr.slice(0, n);
  });

  eleventyConfig.addFilter("byPos", function(players, positions) {
    if (!players) return [];
    return players.filter(p => positions.includes(p.pos));
  });

  return {
    pathPrefix: "/wasatch-wire/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
