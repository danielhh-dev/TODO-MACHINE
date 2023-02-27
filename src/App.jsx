//import './App.css'

const todos = [
  {text: "cortar cebolla", completed: false},
  {text: "tomar el curso de react", completed: false},
  {text: "llorar con la llorona", completed: false}
]

function App() {


  return (
    <>
      <TodoCounter />
      <h2>Has completado 2 de 3 TODOS</h2>    

      <TodoSearch />
      <input type="text" placeholder="Cebolla" />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem />
        ))}
      </TodoList>

      <CreateButton />
    </>
  )
}

export default App
