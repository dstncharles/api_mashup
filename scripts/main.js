////////////////////////////////
///Model
////////////////////////////////
var Zip = Backbone.Model.extend({
  defaults: {
    body: ''
  }
});

var ZipCollection = Backbone.Collection.extend({
  model: Zip
});


////////////////////////////////
///View
////////////////////////////////
var ZipInputView = Backbone.View.extend({
  tagName: 'form',
  events: {
    'submit': 'createData'
  },

  createData: function(event) {
    event.preventDefault();
    console.log('data');
  },

  template: _.template($('#index-template').text()),

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

var ZipsListView = Backbone.View.extend({
  tagName: 'ul',

  render: function() {
    var self = this;
    this.collection.each(function(zips) {
      self.$el.append('<li>' + zips.get('body') + '</li>');
    });
  }
});


////////////////////////////////
///Router
////////////////////////////////
var MyRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "results/:id": "showResults"
  },

  initialize: function() {
    this.zips = new ZipCollection([{
      body: 'First Data'
    }]);
    this.inputView = new ZipInputView({
      collection: this.zips
    });
    this.listView = new ZipsListView({
      collection: this.zips
    });
  },


  index: function() {
    this.inputView.render();
    $('#app-container').append(this.inputView.el);
    this.listView.render();
    $('#app-container').append(this.listView.el);
  },

  // results: function(id) {
  //   var template = _.template($('#results-template').text());
  //   var renderedTemplate = template("results-template");
  //   $('.app-container').html(renderedTemplate);
  // },

});

$(document).ready(function() {
  var router = new MyRouter();
  Backbone.history.start();
});
/////////////////////////////////////////////////////////
