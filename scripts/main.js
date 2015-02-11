////////////////////////////////
///Aplication State
////////////////////////////////
var MyRouter = Backbone.Router.extend({
      routes: {
        "": "index",
        "results/:id": "results"
      },
      index: function() {
        var template = _.template($('#job-and-homes-template').text());
        var renderedTemplate = template("job-and-homes-template");
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
