var ListView = Backbone.View.extend({

  el: '<div>',

  className: "list",

  initialize: function() {
    this.listenTo(this.collection, "add remove", this.render);
    this.render();
  },

  render: function() {
    return this.$el.html('<ol></ol>').append(
      this.collection.models.map(function(entry) {
        return entry.attributes.text;
      })
    );
  }

});
