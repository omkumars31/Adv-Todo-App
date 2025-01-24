import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeather = createAsyncThunk('tasks/fetchWeather', async () => {
  const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=55888da1e95e17b76658c4c16b2ce86b');
  return response.data;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: { tasks: [], weather: null, loading: false, error: null },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    prioritizeTask: (state, action) => {
      const { id, priority } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) task.priority = priority;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weather = action.payload;
        state.loading = false;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { addTask, deleteTask, prioritizeTask } = taskSlice.actions;
export default taskSlice.reducer;