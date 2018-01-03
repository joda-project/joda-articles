import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../templates/components/article-entry';

const DocumentEntry = Component.extend({
  layout,
  session: service(),
  tagName: 'article',
  classNames: ['media', 'is-vertical-centered']
});

DocumentEntry.reopenClass({
  positionalParams: ['document']
});

export default DocumentEntry;
