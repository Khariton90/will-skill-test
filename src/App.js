import './App.scss';
import { ActivateImmunity } from './components/activate-immunity/activate-immunity';
import { GetProtection } from './components/get-protection/get-protection';
import { Header } from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <ActivateImmunity />
      <GetProtection />
    </div>
  );
}

export default App;
