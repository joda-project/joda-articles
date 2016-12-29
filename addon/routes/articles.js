import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Articles',

  model: function() {
    return Ember.RSVP.hash({
      journals: this.get('store').findAll('journal'),
      authors: this.get('store').findAll('author'),
      tags: this.get('store').findAll('tag')
    });
  }
});
