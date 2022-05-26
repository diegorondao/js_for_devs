import React from 'react';
import Context from './components/Context';
import Destructuring from './components/Destructuring';
import Enum, { Category } from './components/Enum';
import FirstComponent from './components/FirstComponent';
// Destruturando props
import SecondComponent from './components/SecondComponent';
import State from './components/State';
import { AppContext, contextValue } from './context';

// Utilizando types
type textOrNull = string | null
type fixed = "Isso" | "Ou" | "Aquilo";

function App() {
  //Example Variaveis
  const name: string = 'Diego'
  const age: number = 18;
  const isWorking: boolean = true; // false

  // Testando types
  const myText: textOrNull = "tem algum texto aqui";
  const mySecondText: textOrNull  = null; 
  const testandoFixed: fixed = "Isso"; // correto
 
  // Example arrow functions
  const sayHello = (name: string) =>{
    return `Olá, ${name}!`;
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className='App'>
        <h1>Example Variables</h1>
        <h2>Name: {name}</h2>
        <h2>Idade: {age}</h2>
        <div>
          <p>{isWorking ? 'Está Trabalhando' : 'Está de folga' }</p>
        </div>

        <h1>Example Types</h1>
        {myText && <p> tem texto na variável</p>}
        {mySecondText && <p> tem texto na variável</p>}
        <p>{testandoFixed}</p>

        <h1>Example function</h1>
        <p>{sayHello(name)}</p>

        <h1>Import components</h1>
        <FirstComponent/>
        <SecondComponent name="Segundo Component"/>
        <Destructuring 
          title='Destructuring Component'
          content='Mais outro conteúdo'
          commentCount={10}
          tags={["ts","js"]}
          />

          <h1>States</h1>
          <State/>
          
          <h1>Enum</h1>
          <Enum title='Trabalhando com Enum' category={Category.JS}/>

          <h1>Trabalhando com contexto</h1>
          <Context/>
      </div>
    </AppContext.Provider>  
  );
}

export default App;
