import React, { useEffect, useState } from 'react';
import SearchTask from './components/SearchTask';
import Tasks from './components/Tasks';
import { formatDate } from './utils/dateFormats';
import { Task } from './types';

const { v1: uuidv1 } = require('uuid');

function Main() {
  const [tasks, setTasks] = useState<Task[]>(JSON.parse(localStorage.getItem("tasks") || "[]"));
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [state, setState] = useState<string | undefined>("0"); 

  const addTask = (title: string, description: string) => {
    const newTask = {
      id: uuidv1(),
      title,
      description,
      dateTime: formatDate(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };


  const filterData = (search: string, state: string) => {
    return tasks.filter((task) => {
      const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());
      const matchesState =
        state === "0" ? true : state === "true" ? task.completed : !task.completed;
      return matchesSearch && matchesState;
    });
  };


  useEffect(() => {
    setFilteredTasks(filterData(searchTerm, state || "0"));
  }, [searchTerm, state, tasks]);

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDeleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task: Task) => task.id !== id));
  };

  const handleCompletedTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task: Task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const getState = (value: string | undefined) => {
    setState(value); 
  };



  return (
    <div className="p-4">
      <div className="p-4 flex justify-center border-b-2 border-blue-gray-100 place-items-center ">
        <SearchTask addTask={addTask} setSearchTerm={setSearchTerm} state={getState} />
      </div>
      <div>
        <Tasks data={filteredTasks} onDeleteTask={handleDeleteTask} onCompletedTask={handleCompletedTask} />
      </div>
    </div>
  );
}

export default Main;
