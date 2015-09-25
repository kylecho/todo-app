var AppView = Backbone.View.extend({

  initialize: function() {
    this.inputView = new InputView({collection: this.collection});
    this.listView = new ListView({collection: this.collection});
  },

  render: function(){
    return this.$el.html([
      this.inputView.$el,
      this.listView.$el
    ]);
  }

});
