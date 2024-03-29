/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styled';

function Star({ className }) {
  return (
    <Container>
      <svg
        className={className}
        width="24"
        height="24"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6762 2.08804C14.5171 1.65808 14.1071 1.37263 13.6487 1.37263C13.1902 1.37263 12.7802 1.65808 12.6211 2.08804L9.83677 9.61265L2.31216 12.397C1.8822 12.5561 1.59675 12.9661 1.59675 13.4245C1.59675 13.883 1.8822 14.293 2.31216 14.4521L9.83677 17.2364L12.6211 24.7611C12.7802 25.191 13.1902 25.4765 13.6487 25.4765C14.1071 25.4765 14.5171 25.191 14.6762 24.7611L17.4606 17.2364L24.9852 14.4521C25.4151 14.293 25.7006 13.883 25.7006 13.4245C25.7006 12.9661 25.4151 12.5561 24.9852 12.397L17.4606 9.61265L14.6762 2.08804Z"
          fill=""
          stroke=""
          strokeWidth="2.19126"
          strokeLinejoin="round"
        />
      </svg>
    </Container>
  );
}
Star.propTypes = {
  className: PropTypes.string.isRequired,
};
export default Star;
