import './App.scss';
import Topbar from './components/Topbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Topbar/>
      <main>
        <h1>Nagłówek H1</h1>
        <section> 
          <div className="block"> kskskks </div>
          <div className="block"> kskskks </div>
          <div className="block"> kskskks </div>
        </section>
      </main>       
    <Footer/> 
    </div>
  );
}

export default App;

// <a
// className="App-link"
// href="https://reactjs.org"
// target="_blank"
// rel="noopener noreferrer"
// >
// Learn React
// </a>
