import { useEffect, useState } from "react";
import Tasks from "../module/Tasks";

function HomePage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);
  const fetchTodos = async () => {
    const res = await fetch("/api/todo");
    const data = await res.json();
    if (data.status === "success") {
      setTodos(data.data);
    }
  };
  return (
    <div className="home-page">
      <div className="home-page--todo">
        <p>Todo</p>
        <Tasks data={todos.todo} />
      </div>
      <div className="home-page--inProgress">
        <p>In Progress</p>
        <Tasks data={todos.inProgress} />
      </div>
      <div className="home-page--review">
        <p>review</p>
        <Tasks data={todos.review} />
      </div>
      <div className="home-page--done">
        <p>done</p>
        <Tasks data={todos.done} />
      </div>
    </div>
  );
}

export default HomePage;
