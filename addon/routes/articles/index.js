import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    'search': {
      refreshModel: true,
      replace: true
    },
    'authors': {
      refreshModel: true,
      replace: true
    },
    'journal': {
      refreshModel: true,
      replace: true
    },
    'year': {
      refreshModel: true,
      replace: true
    }
  },

  model: function() {
    return this.modelFor('articles');
  }
});
