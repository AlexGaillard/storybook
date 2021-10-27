import logo from './logo.svg';
import './App.css';
import {Button} from './stories/Button.jsx'
import {Title} from './stories/Title.jsx'


function App() {
  return (
    <div className="App">
      <Title primary label="Hello World" />
      <Button large primary size="large" label="CLICK ME"></Button>
    </div>
  );
}

export default App;
