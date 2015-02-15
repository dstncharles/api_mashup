////////////////////////////////
///Model
////////////////////////////////
window.App = window.App || {};

 var AppModel = Backbone.Model.extend({
  // console.log('dog')
   defaults: {
     searchTerm: ''
   }
 });

 // var Concert = Backbone.Model.extend({});

 var ConcertCollection = Backbone.Collection.extend({
// console.log('pig')
   initialize: function(collection, options){
     this.appModel = options.appModel;
   },

   url: function (){
    console.log('6')
     var searchTerm = this.appModel.get('events');
     var base = "http://api.bandsintown.com/artists/Skrillex/events.json?app_id=";
     var appId = "something_music";
      return base + appId + (searchTerm ? "&events=" + searchTerm : "");
   },

   // model: Concert,

   sync: function(method, collection, options) {
    console.log('5')
     options.dataType = 'jsonp';
     Backbone.sync(method, collection, options);
   },

 });


////////////////////////////////
///View
////////////////////////////////
 var ListView = Backbone.View.extend({
  // console.log('pow')

   el: '#events',

   initialize: function(){
     this.listenTo(this.collection, 'sync', this.render);
   },

   render: function(){
    console.log('3')
     this.$el.empty();
     var self = this;
     this.collection.each(function(event){
       self.$el.append('<li>' + event.get('') + '</li>');
     });
   },
 });


////////////////////////////////
///Router
////////////////////////////////
 var AppRouter = Backbone.Router.extend({
  // console.log('ban')
   routes: {
     '': 'index',
     'search/:term': 'search'
   },

   initialize: function(){
    console.log('2')
     this.appModel = new AppModel();
     this.events = new ConcertCollection([], {appModel: this.appModel});
     this.listView = new ListView({collection: this.events});
     this.listView.render();
   },

   index: function(){
    console.log('4')
     this.events.fetch();
   },

   search: function(){
    console.log('sad')
     this.appModel.set('searchTerm');
     this.events.fetch();
   }
 });

 $(document).ready(function(){
  console.log('1')
   window.router = new AppRouter();
   Backbone.history.start();
 });














 // ////////////////////////////////
// ///Model
// ////////////////////////////////
// var Concert = Backbone.Model.extend({
//   defaults: {
//     body: ''
//   }
// });
//
// var ConcertCollection = Backbone.Collection.extend({
//
// });
//
//
// ////////////////////////////////
// ///View
// ////////////////////////////////
// var ZipInputView = Backbone.View.extend({
//   tagName: 'form',
//   events: {
//     'submit': 'createData'
//   },
//
//   createData: function(event) {
//     event.preventDefault();
//     console.log('data');
//   },
//
//   template: _.template($('#index-template').text()),
//
//   render: function() {
//     this.$el.html(this.template());
//     return this;
//   }
// });
//
// var ZipsListView = Backbone.View.extend({
//   tagName: 'ul',
//
//   render: function() {
//     var self = this;
//     this.collection.each(function(zips) {
//       self.$el.append('<li>' + zips.get('body') + '</li>');
//     });
//   }
// });
//
//
// ////////////////////////////////
// ///Router
// ////////////////////////////////
// var MyRouter = Backbone.Router.extend({
//   routes: {
//     "": "index",
//     "results/:id": "showResults"
//   },
//
//   initialize: function() {
//     this.zips = new ZipCollection([{
//       body: 'First Data'
//     }]);
//     this.inputView = new ZipInputView({
//       collection: this.zips
//     });
//     this.listView = new ZipsListView({
//       collection: this.zips
//     });
//   },
//
//
//   index: function() {
//     this.inputView.render();
//     $('#app-container').append(this.inputView.el);
//     this.listView.render();
//     $('#app-container').append(this.listView.el);
//   },
//
//   // results: function(id) {
//   //   var template = _.template($('#results-template').text());
//   //   var renderedTemplate = template("results-template");
//   //   $('.app-container').html(renderedTemplate);
//   // },
//
// });
//
// $(document).ready(function() {
//   var router = new MyRouter();
//   Backbone.history.start();
// });
// /////////////////////////////////////////////////////////