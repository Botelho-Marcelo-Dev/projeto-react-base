import reactLogo from './assets/react.svg'
import './App.css'
import StyledP from './components/text/text'
import Button from './components/button/button'

function App() {
  return (
    <>
      <div className='logoReact'>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      <h1>Vite + React</h1>
      </div>

      <div className='container'>
        <Button label="Me clique para um alerta" />
        <StyledP color="blue" label="Este é o label de meu parágrafro" />
      </div>
    </>
  )
}

export default App
