import {
  articleAuthors
} from 'dummy/helpers/article-authors';
import {
  module,
  test
} from 'qunit';

module('Unit | Helper | article authors');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = articleAuthors([]);
  assert.equal(result, '');

  // TODO: full tests
});
