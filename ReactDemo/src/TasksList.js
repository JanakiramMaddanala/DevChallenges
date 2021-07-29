import React from "react";
import { connect } from "react-redux";

function TasksList({ tasks, total }) {
  return (
    <div>
      <p id="total">{total}</p>
      <ul>
        {Array.from(tasks).map(({ id, taskName, elapsedTime }) => {
          return (
            <li className="task">
              <span className="id">{id}</span>{" "}
              <span className="name">{taskName}</span>{" "}
              <span className="time">{elapsedTime}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  let tasks = new Map();
  state.forEach((el) => {
    if (tasks.has(el.taskName)) {
      let a = tasks.get(el.taskName);
      tasks.set(el.taskName, {
        ...a,
        elapsedTime: a.elapsedTime + el.elapsedTime,
      });
    } else {
      tasks.set(el.taskName, el);
    }
  });
  return {
    tasks: tasks.values(),
    total: state.reduce((acc, cur) => (acc = acc + cur.elapsedTime), 0),
  };
};

export default connect(mapStateToProps)(TasksList);
