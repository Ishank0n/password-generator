import './App.css'
import { useState } from 'react';

function App() {

  const [password, setPassword] = useState("");
  const [length, setLength] = useState('12');
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [error, setError] = useState('');

  function generatePassword(){
  
  if (!upperCase && !lowerCase && !numbers && !symbols){
    setError('Please select atleast one type of character');
    return;
  }

  setError('');

  let characters = '';
  
  if(upperCase){
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(lowerCase){
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if(numbers){
    characters += '1234567890';
  }
  if(symbols){
    characters += '!@#$%^&*()';
  }

  if (characters.length === 0){
    return;
  }

  let newPassword = '';

  for (let i = 0; i < length; i++){ 
    const randomIndex = Math.floor(Math.random() * characters.length)
    newPassword += characters[randomIndex];
      console.log(randomIndex);
      console.log(characters[randomIndex])
      console.log(newPassword);
  }
  setPassword(newPassword);

}

function copyButton(){
  navigator.clipboard.writeText(password);
}

function getPasswordStrength(){
  let score = 0;
  if (length >= 8){
    score = score + 2;
  }
  if(upperCase){
    score = score + 1;
  }
 if(lowerCase){
    score = score + 1;
  }
 if(numbers){
    score = score + 1;
  }
 if(symbols){
    score = score + 1;
  }

if(score <= 2){
  return '🔴 Weak';}
if(score <=4){
  return '🟡 Medium';}
if(score >= 5){
  return '🟢 Strong';
}
}



  return(
    <div className='container'>
      <h1>Password Generator</h1>

      <input type='text' readOnly value={password}></input>

      <button onClick={copyButton}>Copy</button>
      
      <p>Password Length: {length}</p>

      <input type='range'
      min={'4'}
      max={'30'}
      value={length}
      onChange={(e)=> setLength(e.target.value)}></input>

      <p>Strength: {getPasswordStrength()}</p>

      <label>
        <input type='checkbox' checked={upperCase} onChange={()=>setUpperCase(!upperCase)}/>
        Uppercase
      </label>
      
      <label>
        <input type='checkbox' checked={lowerCase} onChange={()=>setLowerCase(!lowerCase)} />
        Lowercase
      </label>

      <label>
        <input type='checkbox' checked={numbers} onChange={()=>setNumbers(!numbers)} />
        Numbers
      </label>

      <label>
        <input type='checkbox' checked={symbols} onChange={()=>setSymbols(!symbols)} />
        Symbols
      </label>
      
      {error && <p className='error-message'>{error}</p>}

      <button onClick={generatePassword}>Generate Password</button>

    </div>
  );
}

export default App;
