import AllTheBooks from './components/AllTheBooks'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import fantasy from './data/fantasy.json'
import { Container } from 'react-bootstrap';

function App() {

  return (
    <>
      <Header />
      <Container>
        <AllTheBooks books={fantasy} />
      </Container>
      <Footer />
    </>
  )
}

export default App