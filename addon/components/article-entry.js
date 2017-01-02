import Ember from 'ember';
import layout from '../templates/components/article-entry';

export default Ember.Component.extend({
  layout,
  tagName: 'article',
  classNames: ['media']
});
