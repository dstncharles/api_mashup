////////////////////////////////
///Aplication State
////////////////////////////////
var MyRouter = Backbone.Router.extend({
      routes: {
        "": "index",
        "results/:id": "results"
      },
      index: function() {
        var template = _.template($('#index-template').text());
        var renderedTemplate = template("index-template");
        $('.app-container').html(renderedTemplate);
      },

      results: function(id) {
        var template = _.template($('#results-template').text());
        var renderedTemplate = template("results-template");
        $('.app-container').html(renderedTemplate);
      },

    });

      $(document).ready(function(){
      var router = new MyRouter();
      Backbone.history.start();
    });



////////////////////////////////
///View
////////////////////////////////



////////////////////////////////
///Model
////////////////////////////////
