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
var ZipCodeInputView = Backbone.View.extend({
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


////////////////////////////////
///Router
////////////////////////////////
var MyRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "results/:id": "showResults"
  },

  initialize: function() {
    this.zips = new ZipsCollection([{body: 'First Data'}]);
    this.inputView = new ZipInputView({collection: this.zips});
    this.listView = new ZipsListView({collection: this.zips});
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
    //
    //
    //
    // (function(){
    //
    //   var Toot = Backbone.Model.extend({
    //     defaults: {
    //       body: ""
    //     }
    //   });
    //
    //   var TootsCollection = Backbone.Collection.extend({
    //     model: Toot
    //   });







    //   var TootInputView = Backbone.View.extend({
    //     tagName: 'form',
    //     events: {
    //       'submit': 'createToot'
    //     },
    //
    //     createToot: function(e){
    //       e.preventDefault();
    //       console.log('toot');
    //     },
    //
    //     template: _.template( $('#toot-input-template').text() ),
    //
    //     render: function(){
    //       this.$el.html( this.template() );
    //       return this;
    //     }
    //   });






    //   var TootsListView = Backbone.View.extend({
    //     tagName: 'ul',
    //
    //     render: function(){
    //       var self = this;
    //       this.collection.each(function(toot){
    //         self.$el.append('<li>' + toot.get('body') + '</li>');
    //       });
    //     }
    //   });






    //   var TooterRouter = Backbone.Router.extend({
    //     routes: {
    //       '': 'index',
    //       'toot/:id': 'showToot'
    //     },
    //
    //     initialize: function(){
    //       this.toots = new TootsCollection([{body: 'First Toot'}]);
    //       this.inputView = new TootInputView({collection: this.toots});
    //       this.listView = new TootsListView({collection: this.toots});
    //     },
    //
    //     index: function(){
    //       this.inputView.render();
    //       $('#app').append(this.inputView.el);
    //       this.listView.render();
    //       $('#app').append(this.listView.el);
    //     },
    //
    //     showToot: function(id){
    //       console.log(id);
    //     }
    //   });
    //
    //   $(document).ready(function(){
    //     var router = new TooterRouter();
    //     Backbone.history.start();
    //   });
    //
    // })();
