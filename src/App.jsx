import Header from "./components/Header/Header"
import Title from "./components/Title/Title"
import Footer from "./components/Footer/Footer"
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <main className="app">
        <Title />
      </main>
      <Footer />
    </div>
  )
}

export default App