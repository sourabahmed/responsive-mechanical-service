
import './App.css';
import Banner from './components/Banner/Banner';
import Experts from './components/Experts/Experts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
      <Footer></Footer>
    </div>
  );
}

export default App;
