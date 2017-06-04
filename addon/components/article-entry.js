import Ember from 'ember';
import layout from '../templates/components/article-entry';

const DocumentEntry = Ember.Component.extend({
  layout,
  session: Ember.inject.service(),
  tagName: 'article',
  classNames: ['media', 'is-vertical-centered']
});

DocumentEntry.reopenClass({
  positionalParams: ['document']
});

export default DocumentEntry;
