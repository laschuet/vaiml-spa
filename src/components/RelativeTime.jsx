import PropTypes from 'prop-types';
import React from 'react';

const relativeTime = timestamp => {
  const now = new Date();
  const datetime = new Date(timestamp);
  const elaspedSeconds = (now.getTime() - datetime.getTime()) / 1000;

  if (elaspedSeconds < 60) {
    return parseInt(elaspedSeconds, 10) + 's';
  }
  if (elaspedSeconds < 3600) {
    return parseInt(elaspedSeconds / 60, 10) + 'm';
  }
  if (elaspedSeconds <= 86400) {
    return parseInt(elaspedSeconds / 3600, 10) + 'h';
  }
  const day = datetime.getDate();
  const month = datetime
    .toDateString()
    .match(/ [a-zA-Z]*/)[0]
    .replace(' ', '');
  const year =
    datetime.getFullYear() === now.getFullYear()
      ? ''
      : ' ' + datetime.getFullYear();
  return day + ' ' + month + year;
};

const RelativeTime = ({ datetime }) => (
  <span title={new Date(datetime).toUTCString()}>{relativeTime(datetime)}</span>
);

RelativeTime.propTypes = {
  datetime: PropTypes.string.isRequired,
};

export default RelativeTime;
