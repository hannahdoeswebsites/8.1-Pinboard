var BookmarkCollection = Backbone.Collection.extend({
  url: "https://api.parse.com/1/classes/Bookmarks",

  parse: function(response) {
    return response.results;
  }
});

export default {BookmarkCollection};
