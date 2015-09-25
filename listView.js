var ListView = Backbone.View.extend({

  el: 'ol',

  tagName: "ol",

  className: "list",

  initialize: function() {
    this.listenTo(this.collection, "add remove", this.render);
    this.render();
  },

  render: function() {
    // this.$el.children.detach();
    return this.$el.append(
      this.collection.map(function(entry) {
        return new entryView({model: Entry}).render();
      })
    );
  }

});
