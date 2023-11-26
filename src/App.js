import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Homepage from './components/homepage/homepage';
function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
