import React from 'react';
import PropTypes from 'prop-types';
import './title.css';

export const Title = ({ primary, label, ...props }) => {
  const mode = primary ? 'storybook-title--primary' :
  'storybook-title--secondary';
  return (
    <h1
      className={['storybook-title', mode].join(' ')}
      {...props}
    >
      {label}
    </h1>
  );
};

Title.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired
}

Title.defaultProps = {
  primary: false
}