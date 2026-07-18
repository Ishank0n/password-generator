import './App.css'

function App() {

  return(
    <div className='container'>
      <h1>Password Generator</h1>

      <input type='text' readOnly></input>

      <button>Copy</button>
      
      <p>Password Length</p>

      <input type='range'></input>

      <label>
        <input type='checkbox' />
        Uppercase
      </label>
      
      <label>
        <input type='checkbox' />
        Lowercase
      </label>

      <label>
        <input type='checkbox' />
        Numbers
      </label>

      <label>
        <input type='checkbox' />
        Symbols
      </label>

      <button>Generate Password</button>
    </div>
  );
}

export default App;
