var AppView = Backbone.View.extend({

  initialize: function() {
    this.inputView = new InputView();
    this.listView = new ListView({collection: List});
  },

  render: function(){
    return this.$el.html([
      this.inputView.$el,
      this.listView.$el
    ]);
  }

});
