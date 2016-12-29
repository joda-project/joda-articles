import Ember from 'ember';

export default Ember.Controller.extend({
  search: null,
  authors: null,
  journal: null,
  year: null,

  authorsList: [],
  journalItem: null,

  searchObserver: Ember.observer('search', function() {
    if (this.get('search') === "") {
      this.set('search', null);
    }
  }),

  authorsObserver: Ember.observer('authors', function() {
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

  authorsListObserver: Ember.observer('authorsList', function() {
    let list = [];
    for (let author of this.get('authorsList')) {
      if (author) {
        list.push(author.get('id'));
      }
    }
    this.set('authors', list.length ? list.join(',') : null);
  }),

  journalObserver: Ember.observer('journal', function() {
    let journal = this.get('journal');
    if (!journal) {
      return;
    }

    let result = this.store.peekRecord('journal', journal);
    if (this.get('journalItem') !== result) {
      this.set('journalItem', result);
    }
  }),

  journalItemObserver: Ember.observer('journalItem', function() {
    let journal = this.get('journalItem');
    this.set('journal', journal ? journal.get('id') : null);
  })
});
