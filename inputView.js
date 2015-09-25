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
  
  onEnter: function() {
    if (e.keyCode == 13) {
      var value = this.input.val();
      if (!value) {
        this.clear();
      } else {
        this.model.save({text: value});
      } 
    }
  }

});
