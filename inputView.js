var InputView = Backbone.View.extend({

  tagName: 'input',

  initialize: function() {
    this.render();
  },

  events: {
    "keypress"  : "onEnter",
  },

  render: function() {
    this.$el.html('<input type="text">');
    return this;
  },

  onEnter: function(e) {
    if (e.keyCode == 13) {
      var value = this.$el.val();
      this.collection.addToCollection(value);
      this.$el.val("");
    }
  }

});
