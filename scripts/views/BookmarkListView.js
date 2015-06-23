import BookmarkItemView from './BookmarkItemView';
export default Backbone.View.extend({

  tagName: 'ul',

  initialize: function(){

    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function(){
    this.renderChildren();
    console.log("pie");
  },

  renderChildren: function(){
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map(function(child) {
      var view = new BookmarkItemView({
        model: child
      });
      this.$el.append(view.el);
      return view;
    }.bind(this));

    return this;
  },

  remove: function(){
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }
});
