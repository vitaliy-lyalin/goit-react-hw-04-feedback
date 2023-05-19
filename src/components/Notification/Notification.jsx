import React from 'react';
import { Message } from './Notification.styled';
import { PropTypes } from 'prop-types';

export const Notification = ({ message }) => {
  // console.log(message);
  return <Message>{message}</Message>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
