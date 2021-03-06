import './App.scss';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import BlockOne from './components/BlockOne';
import BlockTwo from './components/BlockTwo';
import BlockThree from './components/BlockThree';
import { useState } from 'react';

function App() {

  const [name, setName] = useState(false);
  const [optionMade, setOptionMade] = useState('');
  const [currentRecord, setCurrentRecord] = useState('');
  const [addedRecord, setAddedRecord] = useState('');
  const [reset, setReset] = useState(false);


  return (
    <div className="App">

    <Topbar name={name} />

      <main> 
      
        <header>
          <h1> N<span className="underline">agłówek H</span>1</h1>
        </header>

          <section> 

            <div className="block-1"> 
              <h3>BLOK PIERWSZY</h3> 
              <BlockOne 
              setOptionMade={setOptionMade}
              reset={reset}
              setReset={setReset} 
              />
            </div>

            <div className="block-2"> 
              <h3>BLOK DRUGI</h3> 
              <BlockTwo 
                optionMade={optionMade}
                setCurrentRecord={setCurrentRecord}
                currentRecord={currentRecord}
                setAddedRecord={setAddedRecord}       
              />
            </div>

            <div className="block-3"> 
              <h3>BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE...</h3> 
              <BlockThree
                currentRecord={currentRecord}
                addedRecord={addedRecord}
                reset={reset} 
                setCurrentRecord={setCurrentRecord} 
                setAddedRecord={setAddedRecord}            
              />
            </div>

          </section>

      </main>     

    <Footer setName={setName} setReset={setReset} /> 

    </div>
  );
}

export default App;