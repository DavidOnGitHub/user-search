import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Input = ({ className, ...otherProps }) => (
  <div className={classnames('input-container', className)}>
    <input {...otherProps} />
  </div>
);

Input.propTypes = {
  className: PropTypes.string
};

export default Input;
