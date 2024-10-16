import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, , setNumberAllowed] = useState(false);
  const [char, setChar] = useState(false);
  const [passoword, setPassword] = useState("");


//useRef  hook
const passwordRef=useRef(null)


  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += 1234567890;
    if (char) str += "!@#$%^&*()_";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, char, setPassword]);



  const copyPassword=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(passoword);
  },[passoword])
  useEffect(() => {
    passwordGenrator();
  }, [length, numberAllowed, char, passwordGenrator]);

  return (
    <div className="w-full bg-orange-400 max-w-md mx-auto rounded-lg px-3 py-4 ">
      <h1 className="text-3xl text-center">Password Genrator</h1>
      <div className=" flex shadow rounded-lg  overflow-hidden mb-4 mt-4">
        <input
          type="text"
          value={passoword}
          className="outline-none w-full py-2 px-4"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPassword} className="bg-pink-200 cursor-pointer p-2">Copy</button>
      </div>
      <div className=" flex text-sm gap-x-2">
        <div className=" flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={35}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{length}</label>
        </div>
        <div className=" flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev + 1);
            }}
          />
        </div>
        <label>Number</label>{" "}
        <div className=" flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={char}
            id="numberInput"
            onChange={() => {
              setChar((prev) => !prev + 1);
            }}
          />
        </div>
        <label>Characters</label>
      </div>
    </div>
  );
}

export default App;
