/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  useEffect(() => {
    console.log(props);
  }, [props]);
  // const {onChange} = props
  const onChange = (e) => {
    console.log('input', e.target.value);
    props.onChange(e.target.value);
  };
  return (
    <div className="page">
      <input {...props} onChange={onChange} />
    </div>
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
