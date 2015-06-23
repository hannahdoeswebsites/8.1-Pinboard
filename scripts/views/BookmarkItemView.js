export default Backbone.View.extend({
  template: JST['bookmarks'],

  tagName: 'li',

  events: {
    'click .bookmark-edit-button': 'editBookmark',
    'submit .bookmark-edit-form': 'saveBookmark',
    'click .bookmark-delete-button': 'deleteBookmark',
  },

  initialize: function(){
    this.render();
    this.listenTo(this.model, 'change', this.render);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  editBookmark: function(e) {
    console.log(this.model.toJSON());
    this.$(".bookmark-edit-form").toggleClass("active");
},


  saveBookmark: function(e) {
    e.preventDefault();
    var title = this.$('.bookmark-title').val();
    var url = this.$('.bookmark-url').val();
    this.model.save({
      title: title,
      url: url
    });
  },

  deleteBookmark: function(e) {
    e.preventDefault();
    this.model.destroy({

    });
  },



});
