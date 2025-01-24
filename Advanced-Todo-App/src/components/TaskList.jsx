import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, prioritizeTask } from '../store/taskSlice';

function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="task-list">
      {tasks.map((t) => (
        <li key={t.id}>
          {t.task} - <strong>{t.priority}</strong>
          <button onClick={() => dispatch(deleteTask(t.id))}>Delete</button>
          <select
            value={t.priority}
            onChange={(e) => dispatch(prioritizeTask({ id: t.id, priority: e.target.value }))}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
