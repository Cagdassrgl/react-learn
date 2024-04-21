import "./index.css";

function Tasks({ tasks }) {
  return (
    <div>
      <h2>Görevler</h2>
      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            <h3>{task.taskName}</h3>
            <p>{task.taskDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
