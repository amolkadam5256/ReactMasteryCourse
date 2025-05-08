import React, { useState, useCallback } from 'react'

const App = () => {

  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [Password, setPassword] = useState()



  const passwordGenerater = useCallback(() => {
    let Pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*()_-+=[]{}|;:'\",.<>?/";

    for (let i = 1; i <= Array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllow, charAllow, setPassword])
  return (
    <>
      <div className='block flex-wrap  justify-center py-5 w-1/2 mx-auto'>
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Password Generator 🔐
        </h1>

        <div className='flex flex-wrap justify-center items-center gap-2 w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-8 bg-gray-200'>
          <input
            type="text"
            name="password"
            value={Password}
            placeholder="Enter your password"
            className='outline-none w-[80%]  py-2 px-3 bg-amber-100'
            readOnly
            id="password"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition shrink-0"
          >Copy</button>


          <div className='flex text-sm gap-x-2'>
            <div className="flex items-center gap-x-1">
              <input type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => { setLength(e.target.value) }}
              />
              <label htmlFor="">Length :{length}</label>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App