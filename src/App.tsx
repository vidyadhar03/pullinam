// src/App.tsx
import './App.css';
import { Toolbar } from './Commons/ToolBar/toolbar';
import { IntroComp } from './Components/Intro';
import { ContactUs } from './Components/ContactUs';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <IntroComp/>
      <ContactUs/>
    </div>
  );
}

export default App;
