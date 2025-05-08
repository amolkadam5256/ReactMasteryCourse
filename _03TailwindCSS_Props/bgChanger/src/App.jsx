import React, { useState } from 'react';

const App = () => {
  const [color, setColor] = useState();

  return (
    <>
      <div className='h-screen w-screen m-0 p-0' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

            <button className='w-12 h-12 rounded-full text-white font-bold flex items-center justify-center'
              style={{ backgroundColor: 'red' }} onClick={() => setColor('red')}>R</button>

            <button className='w-12 h-12 rounded-full text-white font-bold flex items-center justify-center'
              style={{ backgroundColor: 'green' }} onClick={() => setColor('green')}>G</button>

            <button className='w-12 h-12 rounded-full text-white font-bold flex items-center justify-center'
              style={{ backgroundColor: 'blue' }} onClick={() => setColor('blue')}>B</button>

            <button className='w-12 h-12 rounded-full text-black font-bold flex items-center justify-center'
              style={{ backgroundColor: 'yellow' }} onClick={() => setColor('yellow')}>Y</button>

            <button className='w-12 h-12 rounded-full text-white font-bold flex items-center justify-center'
              style={{ backgroundColor: 'purple' }} onClick={() => setColor('purple')}>P</button>

            <button className='w-12 h-12 rounded-full text-white font-bold flex items-center justify-center'
              style={{ backgroundColor: 'pink' }} onClick={() => setColor('pink')}>Pi</button>

            <button className='w-12 h-12 rounded-full text-white font-bold flex items-center justify-center'
              style={{ backgroundColor: 'orange' }} onClick={() => setColor('orange')}>O</button>

            <button className='w-12 h-12 rounded-full text-white font-bold flex items-center justify-center'
              style={{ backgroundColor: 'indigo' }} onClick={() => setColor('indigo')}>I</button>

            <button className='w-12 h-12 rounded-full text-black font-bold flex items-center justify-center border'
              style={{ backgroundColor: 'white' }} onClick={() => setColor('white')}>W</button>

            <button className='w-12 h-12 rounded-full text-white font-bold flex items-center justify-center'
              style={{ backgroundColor: 'brown' }} onClick={() => setColor('brown')}>Br</button>

            <button className='w-12 h-12 rounded-full text-black font-bold flex items-center justify-center'
              style={{ backgroundColor: 'lime' }} onClick={() => setColor('lime')}>L</button>

            <button className='w-12 h-12 rounded-full text-white font-bold flex items-center justify-center'
              style={{ backgroundColor: 'teal' }} onClick={() => setColor('teal')}>T</button>

            <button className='w-12 h-12 rounded-full text-white font-bold flex items-center justify-center'
              style={{ backgroundColor: 'gray' }} onClick={() => setColor('gray')}>Gr</button>

          </div>
        </div>
      </div>
    </>
  );
};

export default App;
