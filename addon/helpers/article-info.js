import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';
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
    default: {
      let output = ``;
      if (authors) {
        output += `${authors},<br>`;
      }
      output += `<i>${title}</i>,<br>`;
      if (journal) {
        output += `${journal} <b>${volume}</b>, ${pages} (${year})`;
      }
      output += `.`;
      return htmlSafe(output);
    }
  }
}

export default helper(articleInfo);
