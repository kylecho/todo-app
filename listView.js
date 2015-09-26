var ListView = Backbone.View.extend({

  el: '<ol>',

  initialize: function() {
    this.listenTo(this.collection, "add remove", this.render);
    this.render();
  },

  render: function() {
    this.$el.empty();
    return this.$el.prepend(
      this.collection.models.map(function(entry) {
        return new EntryView({model: entry}).render().el;
      })
    );
  }

});
