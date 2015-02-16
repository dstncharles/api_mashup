////////////////////////////////
///Model or collections 
//colection of data and or behavior 
////////////////////////////////
window.App = window.App || {};

 var AppModel = Backbone.Model.extend({
   defaults: {
     'city': '',
     'name': ''
   }
 });

 var ConcertCollection = Backbone.Collection.extend({
   initialize: function(collection, options){
     this.appModel = options.appModel;
   },

   url: function (){
     var searchTerm = this.appModel.get('events');
     var base = "http://api.bandsintown.com/artists/Skrillex/events.json?app_id=";
     var appId = "something_music";
      return base + appId + (searchTerm ? "&venue=" + searchTerm : "");
   },

   sync: function(method, collection, options) {
     options.dataType = 'jsonp';
     Backbone.sync(method, collection, options);
   }
 });


////////////////////////////////
///View
//JS objact
//responisble for meadiating and
//a model or collection 
////////////////////////////////
 var ListView = Backbone.View.extend({

   el: '#events',

   initialize: function(){
     this.listenTo(this.collection, 'sync', this.render);
   },

   render: function(){
     this.$el.empty();
     var self = this;
     this.collection.each(function(event){
       self.$el.append('<li>' + event.get('venue').city + '</li>');
     });
   },
 });


////////////////////////////////
///Router
//manages aplication state 
//routs and urls
////////////////////////////////
 var AppRouter = Backbone.Router.extend({
   routes: {
     '': 'index',
     'search/:term': 'search'
   },

   initialize: function(){
     this.appModel = new AppModel();
     this.events = new ConcertCollection([], {appModel: this.appModel});
     this.listView = new ListView({collection: this.events});
     this.listView.render();
   },

   index: function(){
     this.events.fetch();
   },

   search: function(){
     this.appModel.set('searchTerm');
     this.events.fetch([]);
   }
 });

 $(document).ready(function(){
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