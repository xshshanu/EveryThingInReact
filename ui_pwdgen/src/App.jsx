import { useCallback, useState,  useEffect, useRef } from 'react';

const App = () => {

  const [inputPassWord, setInputPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const pswdReference = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let generatedChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) generatedChar += "0123456789" 
    if(charAllowed) generatedChar += "!@#$%^&*`~()[]{}_-=/?+" 

    for (let i = 1; i <= length; i++) {
      let rndmPass = Math.floor(Math.random() * generatedChar.length + 1);
      
      pass += generatedChar.charAt(rndmPass)
    }

    setInputPassword(pass);

  }, [length, numAllowed, charAllowed, setInputPassword]);


  useEffect(() => {
    PasswordGenerator()
  }, [length, numAllowed, charAllowed, PasswordGenerator])
  

  const handleCopyPass = useCallback(() => {
    pswdReference.current?.select();
    pswdReference.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(inputPassWord);
  }, [inputPassWord]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg py-3 px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className='text-white text-4xl my-3 text-center'>Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input className='w-full outline-none py-1 px-3' type="text" placeholder='Random Password' readOnly value={inputPassWord} ref={pswdReference}/>

          <button className='outline-none bg-blue-700 text-white py-0.5 px-3 shrink-0' onClick={() => handleCopyPass()}>Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" name="slider" min={8} max={25} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
            <label htmlFor="lengthSlide">Length : {length}</label>

          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" name="checkbox" defaultChecked={numAllowed}  onChange={() => {setNumAllowed((prev) => !prev)}}/>

            <label htmlFor="numbersInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" name="checkbox" defaultChecked={charAllowed}  onChange={() => {setCharAllowed((prev) => !prev)}}/>

            <label htmlFor="symbolCharacters">Characters</label>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
