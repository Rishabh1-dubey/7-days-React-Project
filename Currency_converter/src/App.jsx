import React, { useState } from 'react'

const App = () => {
const[amount , setAmount] = useState(0);
const [from , setFrom] = useState("usd");
const [to , setTo]= useState("inr");
const[convertedAmount , setConvertedAmount]=useState(0)


  return (
    <div className=''>
      <h1 className='text-center bg-red-500'>Rishabh don't Give up</h1>
    </div>
  )
}

export default App
