var EntryView = Backbone.View.extend({

  tagName: "li",

  template: _.template('<%= text %>'),

  className: "entry",

  events: {
    "click": "destroy"
  },

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
    // this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  destroy: function() {
    this.model.destroy();
  }

});
