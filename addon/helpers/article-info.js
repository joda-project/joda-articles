import Ember from 'ember';
import {
  articleAuthors
} from 'joda-articles/helpers/article-authors';

export function articleInfo([format, title, authorsList, journal, volume, pages, year]) {
  if (!title) {
    return '';
  }

  format = format ? format : 'standard';

  let authors = articleAuthors([authorsList, format]);

  switch (format) {
    case 'standard':
      /* falls through */
    default:
      let output = ``;
      if (authors) {
        output += `${authors},<br>`;
      }
      output += `<i>${title}</i>,<br>`;
      if (journal) {
        output += `${journal} <b>${volume}</b>, ${pages} (${year})`;
      }
      output += `.`;
      return Ember.String.htmlSafe(output);
  }
}

export default Ember.Helper.helper(articleInfo);
