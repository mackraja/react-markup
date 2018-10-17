/**
 * Created by monty on 16/10/18.
 */
'use strict';

// Load modules

const React = require('react');
const PropTypes = require('prop-types');

/**
 * @param htmlTag: html tag like div, td, span
 * @param htmlString: string with html
 * @param rest: other html attributes of [htmlTag]
 * @returns {*|Element} JSX
 * @constructor
 */
const Markup = ({ htmlTag, htmlString, ...rest }) => {
  const custom = rest || {};
  custom.dangerouslySetInnerHTML = { __html: htmlString };
  return React.createElement(htmlTag, custom);
};

Markup.propTypes = {
  htmlTag: PropTypes.string,
  htmlString: PropTypes.string
};

Markup.defaultProps = {
  htmlTag: 'div',
  htmlString: ''
};

module.exports.Markup = Markup;