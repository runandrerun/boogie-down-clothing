import React from 'react';
import './UniqueButton.styles.scss';

const UniqueButton = ({ children, ...otherButtonProps }) => {
  return (
    <button className="unique-button" {...otherButtonProps}>
      {children}
    </button>
  );
};

export default UniqueButton;
