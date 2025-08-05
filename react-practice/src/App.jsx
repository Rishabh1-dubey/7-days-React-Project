// import { useState } from "react";
// import "./App.css";

import { useState } from "react";

import SelctItem from "./components/SelctItem";

function App() {
  // const [count, setCount] = useState(0)

  // const [password, setPassword] = useState(false);
  // const [text, setText] = useState("");

  // const[color,setColor] = useState('yellow')

  const [darkMode, setDarkMode] = useState(false);

  const togglethem = () => {
    setDarkMode(!darkMode);
  };

  const customtheme = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "white" : "black",
    height: 300,
  };

  return (
    //Create a counter with Increase, Decrease, and Reset buttons. The counter should not go below 0.
    <>
      <div>
        {/* <div>
        <h1>This is my practice problem. I am learning</h1>
        <button onClick={() => setCount(count + 1)}>
          The number is increasing: {count}
          </button>
          <button onClick={() => {
            if (count > 0 && count-1) {
              setCount(count - 1)
              }
              }}>
              The number is decreasing: {count}
        </button>
        <button onClick={()=>{setCount(0)}}>Reset:</button>
      </div> */}
      </div>

      {/* Build an input field for password with a "Show/Hide Password" button that toggles the input type between password and text. */}

      {/* <div>
        <h2>React challegn part2: password </h2>

        <form onSubmit={(e)=>e.preventDefault()}>
          <input  type={password ?"text":"password"} placeholder="Enter your password"/>
          <button onClick={()=>{
            setPassword(!password)
          }}> {password ?"hide Password":"Show Password"}</button>
        </form>
      </div> */}

      {/* Character Counter */}

      {/* <div>
        <h1>Character counter</h1>
        <input value={text}  onChange={(e)=>{setText(e.target.value)}} type="text" />
        <p>character counter:{text.length}</p>
      </div> */}

      {/* Create a set of color buttons (e.g., Red, Green, Blue). Clicking a button should change the background color of a div. */}
      {/* <div>

<h1>the is background color practice</h1>

<button onClick={()=>setColor('red')}>Red</button>
<button onClick={()=>setColor('black')}>Black</button>
<button onClick={()=>setColor('blue')}>Blue</button>

<div style={{
          marginTop: '20px',
          width: '200px',
          height: '100px',
          backgroundColor: color,
          border: '1px solid black'
        }}>changing the background color{color}</div>
</div> */}

      {/* Implement a button to toggle between light and dark mode using useState and change background/text color accordingly. */}

      {/* <div style={customtheme}>
        <h1 >Custom theme of the my dark mode :{darkMode ? "DarkMode" : "LightMode"}</h1>
<button onClick={togglethem} >the Mode is :{darkMode?"Dark":"Light"}</button>

        */}
        <SelctItem/>
    </>
  );
}




export default App;

// const App = () => {
//   return (
//     <div>

//       <RandomQuotes/>
//     </div>
//   )
// }
