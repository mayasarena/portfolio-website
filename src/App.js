import { Projects, Navigation } from './components';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {

  return (
    <div className="bg-gradient-to-r from-purple to-blue">
      <Navigation />
      <div>
        <Routes>
          <Route path="/*" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
