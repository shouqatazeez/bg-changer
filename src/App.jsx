import { useState } from 'react'

function App() {
  const [color, setColor] = useState("lightblue")

  return (
  
      <div className='w-full h-screen duration-200'style={{backgroundColor:color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>

         <button
         onClick={() => setColor("red")} 
         className='outline-none px-4 py-1 text-amber-50 rounded-full shadow-sm ' style={{backgroundColor:"red"}}
         >Red</button>

         <button
         onClick={() => setColor("Blue")}
          className='outline-none px-4 py-1 text-amber-50 rounded-full shadow-sm ' style={{backgroundColor:"blue"}}
         >Blue</button>

         <button
         onClick={()=> setColor("green")} 
         className='outline-none px-4 py-1 text-amber-50 rounded-full shadow-sm ' style={{backgroundColor:"green"}}
         >Green</button>

         <button
         onClick={() =>setColor("yellow")} 
         className='outline-none px-4 py-1 text-amber-50 rounded-full shadow-sm ' style={{backgroundColor:"yellow"}}
         >Yellow</button>

         <button 
         onClick={() => setColor("orange")}
         className='outline-none px-4 py-1 text-amber-50 rounded-full shadow-sm ' style={{backgroundColor:"orange"}}
         >Orange</button>

         <button
         onClick={() =>setColor("purple")} className='outline-none px-4 py-1 text-amber-50 rounded-full shadow-sm ' style={{backgroundColor:"purple"}}
         >Purple</button>

         <button
         onClick={() =>setColor("gray")} 
         className='outline-none px-4 py-1 text-amber-50 rounded-full shadow-sm ' style={{backgroundColor:"gray"}}
         >Gray</button>

         <button
         onClick={() =>setColor("cyan")} className='outline-none px-4 py-1 text-amber-50 rounded-full shadow-sm ' style={{backgroundColor:"cyan"}}
         >Cyan</button>

         <button
         onClick={() =>setColor("Brown")} className='outline-none px-4 py-1 text-amber-50 rounded-full shadow-sm ' style={{backgroundColor:"Brown"}}
         >Brown</button>









          </div> 
          </div> 
      </div>
      
    
  )
}

export default App
