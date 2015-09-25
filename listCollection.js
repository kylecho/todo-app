var List = Backbone.Collection.extend({
  model: Entry,

  addToCollection: function(value) {
    this.add({text: value});
  }
});
