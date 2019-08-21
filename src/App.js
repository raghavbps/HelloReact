import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComp from './FirstComp';

function App() {
  return (
    <div className="App" style={{textAlign:'left!important'}}>
      <div style={{textAlign:'left'}}>
        <h1 style={{marginLeft:'50px',marginTop:'150px',color:'blue'}}>
          {"Hey!!"}
        </h1>
      </div>
      <div>
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <div>
            <FirstComp/>
            <form>
              <label>
                Name:
                <input style={{marginLeft:'12px',height:'50px',width:'200px',fontSize:'x-large'}} type="text" name="name" />
              </label>
              <br/>
              <input style={{marginLeft:'50px',height:'50px',width:'200px',fontSize:'x-large'}} type="submit" value="Submit" />
            </form>
          </div>
          {/*<p>*/}
          {/*  Edit <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}
          {/*<a*/}
          {/*  className="App-link"*/}
          {/*  href="https://reactjs.org"*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*>*/}
          {/*  Learn React*/}
          {/*</a>*/}
        </header>
      </div>
    </div>
  );
}

export default App;
