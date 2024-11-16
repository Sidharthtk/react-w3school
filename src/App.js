import logo from './logo.svg';
import './App.css';
import Header from './Componants/Header1/Header';
import Header2 from './Componants/Header1/Header2';
import Home from './Componants/Home/Home';
import Footer from './Componants/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Header2/> */}
      <Home/>
      <Footer/>

      
    </div>
  );
}

export default App;
