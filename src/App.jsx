import { useState, useRef, useEffect } from 'react';
import './App.css'

function App() {
  let counterRef = useRef(0);
  const [searchArray, setSearchArray] = useState([]);

  // useEffect(() => {
  //   function fetching() {
  //     // fetch('https://jsonfakery.com/movies/random', 
  //     fetch(`https://api.spoonacular.com/food/products/search?query={}`,
  //       {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'x-api-key': 'a523e0c68cfd44d999e4840572d1afb3',
  //       },
  //     })
  //       .then(response => response.json())
  //       .then(data => console.log(data))
  //       .catch((e) => console.log(`Fetch error: ${e}`))


  //     counterRef.current = counterRef.current + 1;
  //   };
    
  //   if(counterRef.current === 0) fetching();
    
  // })

  function fetching(word) {
    // fetch('https://jsonfakery.com/movies/random', 
    if(!word) {
      setSearchArray([]);
      return;
    }
    //search?query=${word}
    fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?query=${word}`,
      {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'a523e0c68cfd44d999e4840572d1afb3',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSearchArray([
          ...data
        ]);
        // setSearchArray([
        //   ...data.products
        // ]);
      })
      .catch((e) => console.log(`Fetch error: ${e}`))


    counterRef.current = counterRef.current + 1;
  };

console.log(searchArray)

  return (
    <>
      <h1>hello</h1>
      <input placeholder='Enter a product' onInput={(e) => {
        // console.log(e.target.value);
        fetching(e.target.value);
      }} />
      <ul style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: '5px'}}>
        {searchArray && searchArray.map((item) => (
          <li key={item.name}>
            <h3>{item.name}</h3> 
            {/* <img src={item.image} /> */}
          </li>
        ))}
      </ul>

    </>
  )
}

export default App;
