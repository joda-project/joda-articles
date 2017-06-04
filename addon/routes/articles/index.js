import DocumentIndexRoute from 'joda-core/routes/document/index';

export default DocumentIndexRoute.extend({
  queryParams: {
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
