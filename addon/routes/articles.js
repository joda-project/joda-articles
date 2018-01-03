import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  titleToken: 'Articles',

  model: function() {
    return hash({
      journals: this.get('store').findAll('journal'),
      authors: this.get('store').findAll('author'),
      tags: this.get('store').findAll('tag')
    });
  }
});
