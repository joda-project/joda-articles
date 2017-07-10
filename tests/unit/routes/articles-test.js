import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:articles', 'Unit | Route | articles', {
  // Specify the other units that are required for this test.
  needs: ['service:i18n']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
