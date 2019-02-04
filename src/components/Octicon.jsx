import octicons from 'octicons';
import PropTypes from 'prop-types';
import React from 'react';

const Octicon = props => (
  <span dangerouslySetInnerHTML={{ __html: octicons[props.name].toSVG() }} />
);

Octicon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Octicon;
