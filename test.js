(function(){

  var Toot = Backbone.Model.extend({
    defaults: {
      body: ""
    }
  });

  var TootsCollection = Backbone.Collection.extend({
    model: Toot
  });

  var TootInputView = Backbone.View.extend({
    tagName: 'form',
    events: {
      'submit': 'createToot'
    },

    createToot: function(e){
      e.preventDefault();
      console.log('toot');
    },

    template: _.template( $('#toot-input-template').text() ),

    render: function(){
      this.$el.html( this.template() );
      return this;
    }
  });


  var TootsListView = Backbone.View.extend({
    tagName: 'ul',

    render: function(){
      var self = this;
      this.collection.each(function(toot){
        self.$el.append('<li>' + toot.get('body') + '</li>');
      });
    }
  });

  var TooterRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'toot/:id': 'showToot'
    },

    initialize: function(){
      this.toots = new TootsCollection([{body: 'First Toot'}]);
      this.inputView = new TootInputView({collection: this.toots});
      this.listView = new TootsListView({collection: this.toots});
    },

    index: function(){
      this.inputView.render();
      $('#app').append(this.inputView.el);
      this.listView.render();
      $('#app').append(this.listView.el);
    },

    showToot: function(id){
      console.log(id);
    }
  });

  $(document).ready(function(){
    var router = new TooterRouter();
    Backbone.history.start();
  });

})();
