import React from 'react';
import PropTypes from 'prop-types';
import { firebase } from '../firebase';

export const Checkbox = ({ id, taskDec }) => {
  const archiveTask = () => {
    firebase.firestore().collection('tasks').doc(id).update({
      archived: true,
    });
  };

  return (
    <div
      className="checkbox-holder"
      datatype-testid="checkbox-action"
      onClick={() => archiveTask()}
      onKeyDown={(e) => {
        if (e.key === 'Enter') archiveTask();
      }}
      aria-label={`Mark ${taskDec} as done ?`}
      role="button"
      tabIndex={0}
    >
      <span className="checkbox"></span>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  taskDec: PropTypes.string.isRequired,
};
