// var deck = [
//   {front: "How do you find out how many elements are in an array?", back: "`.length`"},
//   {front: "What HTML element should be used for a blog post?", back: "section"}
// ];
//
// var MyRouter = Backbone.Router.extend({
//   routes: {
//     "": "index",
//     "card/:id": "card"
//   },
//
//   index: function(){
//     var template = _.template( $('#card-list-template').text() );
//     var renderedTemplate = template({cards: deck});
//     $('.app-container').html(renderedTemplate);
//   },
//
//   card: function(id){
//     var cardIndex = Number(id);
//     var card = deck[cardIndex];
//
//     var template = _.template( $('#card-template').text() );
//     var renderedTemplate = template(card);
//     $('.app-container').html(renderedTemplate);}
// });
//
// $(document).ready(function(){
//   var router = new MyRouter();
//   Backbone.history.start();
// });
