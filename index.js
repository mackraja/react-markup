var __rest = (this && this.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
};
import React from 'react';
/**
* @param htmlTag: html tag like div, td, span
* @param htmlString: string with html
* @param rest: other html attributes of [htmlTag]
* @returns {*|Element} JSX
* @constructor
*/
const Markup = (_a) => {
  var { htmlTag = 'div', htmlString = '' } = _a, rest = __rest(_a, ["htmlTag", "htmlString"]);
  const custom = rest || {};
  custom.dangerouslySetInnerHTML = { __html: htmlString };
  return React.createElement(htmlTag, custom);
};
export default Markup;
