import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Restaurants from './components/Restaurants';
import RestaurantDetails from './components/RestaurantDetails';
import Footer from './components/Footer'



function App() {
  return (
    <>

      <Router>

        <Header/>

        <main className="py-3">

          <Container>

            <Routes>

              <Route path='/' element={<Home />} />

              <Route path='/restaurants/:id' element={<RestaurantDetails />} />

            </Routes>

          </Container>

        </main>

        <Footer/>

      </Router>

    </>
  );
}

export default App;
