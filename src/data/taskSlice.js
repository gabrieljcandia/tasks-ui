import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {editOne, getByAmount} from "../services/taskApi";

const initialState = {
  tasks: [],
  selectedTask: null
}

export const getTasks = createAsyncThunk(
  'task/getTasks',
  async ({quantity}) => {
    return await getByAmount({quantity});
  }
)

export const editTask = createAsyncThunk(
  'task/editTask',
  async (arg, thunkAPI) => {
    const {uuid, title, completed} = thunkAPI.getState().task.selectedTask;
    return editOne({uuid, title, completed});
  }
)

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    selectTask(state, action) {
      const matchingUuidTasks = state.tasks.filter(task => task.uuid === action.payload);
      // As UUID are expected to be unique, only one element should match here
      state.selectedTask = matchingUuidTasks[0];
    },
    unselectTask(state) {
      state.selectedTask = null;
    },
    completeTask(state) {
      state.selectedTask.completed = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
    builder.addCase(editTask.fulfilled, (state, action) => {
      const updatedTask = action.payload;
      state.tasks = state.tasks.map(task => task.uuid === updatedTask.uuid ? updatedTask : task);
      state.selectedTask = null;
    });
  }
})

export const selectTasks = (state) => state.task.tasks;
export const selectCurrentTask = (state) => state.task.selectedTask;

export const {selectTask, unselectTask, completeTask} = taskSlice.actions;
export default taskSlice.reducer;