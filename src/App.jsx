import Header from "./components/Header/Header"
import Title from "./components/Title/Title"
import Footer from "./components/Footer/Footer"
import PropertyList from "./components/PropertyList/PropertyList"
import './App.css'
import properties from "./data/properties"

const App = () => {
  return (
    <div>
      <Header />
      <main className="app">
        <Title />
        <PropertyList properties={properties} />
      </main>
      <Footer />
    </div>
  )
}

export default App