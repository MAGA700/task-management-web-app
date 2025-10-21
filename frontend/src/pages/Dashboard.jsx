import React, { useEffect, useState } from "react";
import api from "../api/axiosConfig";

const Dashboard = ({ onLogout }) => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async (e) => {
    e.preventDefault();
    await api.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>Панель задач</h2>
      <button onClick={onLogout}>Выйти</button>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Новая задача"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Добавить</button>
      </form>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.title}{" "}
            <button onClick={() => deleteTask(t.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
