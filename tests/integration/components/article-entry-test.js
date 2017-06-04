import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('article-entry', 'Integration | Component | article entry', {
  integration: true,

  beforeEach: function() {
    this.inject.service('store');
  }
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  Ember.run(() => {
    let store = this.get('store');
    this.set('article', store.createRecord('article', {
      title: 'Test Article'
    }));
  });

  this.render(hbs `{{article-entry document=article}}`);

  assert.equal(this.$().text().trim(), 'Test Article,.');

  // TODO: full article sample
});
