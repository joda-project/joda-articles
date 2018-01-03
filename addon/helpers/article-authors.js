import { helper } from '@ember/component/helper';

const formats = {
  standard: {
    short: true,
    dot: true,
    reverse: false,
    name_separator: ' ',
    authors_separator: ', ',
    last_separator: ' and ',
    et_al: 'et al.'
  }
};

function prepareAuthorName(author, format) {
  let parts = author.get('name').split(' ');
  let formatInfo = formats[format];

  let firstname = [];
  if (formatInfo.short) {
    for (let part of parts.slice(0, parts.length - 1)) {
      firstname.push(part[0] + (formatInfo.dot ? '.' : ''));
    }
  } else {
    firstname = parts.slice(0, parts.length - 1);
  }

  let lastname = parts[parts.length - 1];

  if (formatInfo.reverse) {
    return lastname + formatInfo.name_separator + firstname.join(' ');
  } else {
    return firstname.join(' ') + formatInfo.name_separator + lastname;
  }
}

export function articleAuthors([authors, format]) {
  if (!authors) {
    return '';
  }

  format = format ? format : 'standard';
  let authorsArray = authors.toArray();
  let formatInfo = formats[format];

  if (!authorsArray.length) {
    return null;
  } else if (authorsArray.length === 1) {
    return prepareAuthorName(authorsArray[0], format);
  } else {
    let list = [];
    for (let author of authorsArray) {
      list.push(prepareAuthorName(author, format));
    }
    return list.slice(0, list.length - 1).join(formatInfo.authors_separator) + formatInfo.last_separator + list[list.length - 1];
  }
}

export default helper(articleAuthors);
