import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    Ember.$.extend(params, this.paramsFor('articles.index'));

    var properties = {};
    if (params.search) {
      properties['search'] = params.search;
    }

    if (params.authors) {
      properties['authors'] = params.authors;
    }

    if (params.journal) {
      properties['journal'] = params.journal;
    }

    return this.get('store').query('article', properties);
  }
});
