import AllTheBooks from './components/AllTheBooks'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import fantasy from './data/fantasy.json'

function App() {

  return (
    <>
      <Header />
      <div className='container-fluid px-4'>
        <AllTheBooks books={fantasy} />
      </div>
      <Footer />
    </>
  )
}

export default App