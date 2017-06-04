import Ember from 'ember';
import DS from 'ember-data';
import Document from 'joda-core/models/document';

export default Document.extend({
  authors: DS.hasMany('author'),
  journal: DS.belongsTo('journal'),
  pages: DS.attr('string'),
  volume: DS.attr('number'),
  issue: DS.attr('number'),
  year: DS.attr('number'),
  doi: DS.attr('string'),
  arxiv: DS.attr('string'),
  cds: DS.attr('string'),

  withoutJournal: Ember.computed('journal', function() {
    return !this.get('journal.id');
  })
});
