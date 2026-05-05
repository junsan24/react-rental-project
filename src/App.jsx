import Header from "./components/Header/Header"
import Title from "./components/Title/Title"
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <main className="app">
        <Title />
      </main>
    </div>
  )
}

export default App