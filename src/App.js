import './App.css';
import Home from './components/Home';
import DonationButton from './components/DonationButton';
import Story from './components/Story';
import Family from './components/Family';
import Help from './components/Help';
import Work from './components/Work';
import Gallery from './components/Gallery';
import Thanks from './components/Thanks';

function App() {

  return (
    <div className="App">
      <Home/>
      <DonationButton/>
      <Story/>
      <Family/>
      <Help/>
      <Work/>
      <Gallery/>
      <Thanks/>
    </div>
  );
}

export default App;
