import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../store/taskSlice'; 
import { logout } from '../store/authSlice'; 
import TaskInput from './TaskInput';
import TaskList from './TaskList';

function TaskManager() {
  const { weather, loading, error } = useSelector((state) => state.tasks);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleFetchWeather = () => {
    dispatch(fetchWeather());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="task-manager">
      <div>
        <h1>Task Manager</h1>
        <p>Welcome, {user}!</p>
        <button onClick={handleLogout}>Logout</button>
        <TaskInput />
      </div>

      <div>
        <TaskList />
        <button onClick={handleFetchWeather}>Fetch Weather</button>
        {loading && <p>Loading...</p>}
        {weather && <p>Current Weather: {weather.weather[0].description}</p>}
        {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
}

export default TaskManager;
