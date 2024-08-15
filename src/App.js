
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import logo from './logo.png'


function App() {
  return (
   <div className="min-h-screen flex flex-col">
    <meta name="description" content="Little Lemon restaurant"/>
    <meta name="og:title" content="Little Lemon"/>
    <meta name="og:image" content={logo}/>
     <Nav />
     <Header />
     <Main />
     <Footer/>
   </div>
  );
}

export default App;
