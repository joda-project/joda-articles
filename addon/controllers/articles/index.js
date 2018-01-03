import { observer } from '@ember/object';
import DocumentIndexController from 'joda-core/controllers/document/index';

export default DocumentIndexController.extend({
  init() {
    this.filters = ['search', 'tags', 'authors', 'journal', 'year', 'sort'];
    this.authorsList = [];
    this._super(...arguments);
  },

  authors: null,
  journal: null,
  year: null,

  journalItem: null,

  authorsObserver: observer('authors', function() {
    let authors = this.get('authors');
    if (!authors) {
      return;
    }

    let result = [];
    for (let index of authors.split(',')) {
      if (index) {
        result.push(this.store.peekRecord('author', index));
      }
    }
    this.set('authorsList', result);
  }),

  authorsListObserver: observer('authorsList', function() {
    let list = [];
    for (let author of this.get('authorsList')) {
      if (author) {
        list.push(author.get('id'));
      }
    }
    this.set('authors', list.length ? list.join(',') : null);
  }),

  journalObserver: observer('journal', function() {
    let journal = this.get('journal');
    if (!journal) {
      return;
    }

    let result = this.store.peekRecord('journal', journal);
    if (this.get('journalItem') !== result) {
      this.set('journalItem', result);
    }
  }),

  journalItemObserver: observer('journalItem', function() {
    let journal = this.get('journalItem');
    this.set('journal', journal ? journal.get('id') : null);
  })
});
