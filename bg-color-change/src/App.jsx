import React, { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")
  function changeColor(color) {
    setColor(color)
  }

  return (
    <div className="bg-black w-full h-screen duration-200 " style={{backgroundColor: color}}>
      <div className="flex justify-center"><h1>Tap the buttons to change the color</h1></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => changeColor("red")}
          style={{backgroundColor: "red"}}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          >Red</button>
          <button
          onClick={() => changeColor("blue")}
          style={{backgroundColor: "blue"}}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black">
            Blue</button>
          <button
          onClick={() => changeColor("yellow")}
          style={{backgroundColor: "yellow"}}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black">
            Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
