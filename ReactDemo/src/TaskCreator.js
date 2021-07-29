import React, { useState } from "react";
import { connect } from "react-redux";
import { saveOnTimerStop } from "./reducer";

let interval;

function TaskCreator({ lastTaskId, saveOnTimerStop }) {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [taskName, setTaskName] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  const onStart = () => {
    if (!isStarted) {
      interval = setInterval(incrementTimeElapsed, 1000);
      setIsStarted(true);
    }
  };

  const incrementTimeElapsed = () => {
    setTimeElapsed((time) => time + 1);
  };

  const onStop = () => {
    if (isStarted) {
      setIsStarted(false);
      clearInterval(interval);
      interval = undefined;

      if (timeElapsed !== 0) {
        saveOnTimerStop({ elapsedTime: timeElapsed, taskName, id: lastTaskId });
      }

      setTimeElapsed(0);
    }
  };

  const onTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const onTimeElapsedChange = (e) => {
    setTimeElapsed(Number(e.target.value));
  };

  const onTimeElapsedFocus = () => {
    if (isStarted) {
      clearInterval(interval);
    }
  };

  const onTimeElapsedBlur = () => {
    if (isStarted) {
      interval = setInterval(incrementTimeElapsed, 1000);
    }
  };

  return (
    <div>
      <label>
        Task name
        <input
          id="taskName"
          type="text"
          value={taskName}
          onChange={onTaskNameChange}
        />
      </label>
      <label>
        Time elapsed
        <input
          id="timeField"
          type="number"
          value={timeElapsed}
          onChange={onTimeElapsedChange}
          onFocus={onTimeElapsedFocus}
          onBlur={onTimeElapsedBlur}
        />
      </label>
      <button type="button" id="start" onClick={onStart}>
        START
      </button>
      <button type="button" id="stop" onClick={onStop}>
        STOP
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    lastTaskId: state.length === 0 ? 1 : state.length + 1,
  };
};

export default connect(mapStateToProps, { saveOnTimerStop })(TaskCreator);
