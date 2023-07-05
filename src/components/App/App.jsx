import { useState } from 'react';
import './App.css';

function App() {
  const [creatureList, setCreatureList] = useState([
    { name: 'Unicorn', origin: 'Britain' },
    { name: 'Sphinx', origin: 'Egypt' },
    { name: 'Jackalope', origin: 'America' }
  ])

  return (
    <>
      <header className="Header">
        <h1>React Mythical Creatures</h1>
      </header>
      <div className="App">
        <div>
          Splatting to the DOM looks like this:
          <pre>
            {/* We can use JSON.stringify() to dump raw data into our DOM */}
            {JSON.stringify(creatureList)}
          </pre>
          <p>
            Getting one creature looks like:
            {creatureList[0].name} is from {creatureList[0].origin}
          </p>

          {/* Loop over creatureList and for each creature, return
              a new <p> tag */}
          {/* .map always loops through an array and returns a
              new array */}
        <ul>
          {creatureList.map(function (creature) {
            console.log(creature);
            // Keys let React uniquely identify each element
            // We want to use something unique for a key - usually a database id
            return (<li key={creature.name}>{creature.name} is from {creature.origin}.</li>);
          }) }
        </ul>

        {/* VARIATION of .map: arrow function */}
        <ul>
          {creatureList.map((creature) => {
            return (<li key={creature.name}>{creature.name} is from {creature.origin}</li>);
          })}
        </ul>

        {/* VARIATION of .map: arrow function with implicit return and no parens around parameters */}
        <ul>
          {creatureList.map(creature => (<li key={creature.name}>{creature.name} is from {creature.origin}</li>))}
        </ul>



        </div>
      </div>
    </>
  );
}

export default App;
