var EntryView = Backbone.View.extend({

  tagName: "li",

  template: _.template('<%= text %>'),

  className: "entry",

  events: {
    "click .entry": "destroy"
  },

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  distroy: function() {
    this.model.destroy();
  }

});