import React from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';

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

module.exports = Markup;