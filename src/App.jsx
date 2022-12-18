import TaskList from "./components/taskList"
import TaskForm from "./components/taskForm"

function App() {

  return (
    <main className="main">
      <section className="container">
        <TaskForm />
        <TaskList />
      </section>
    </main>
  )
}

export default App
