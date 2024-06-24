import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './routes/Detail';
import Home from './routes/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
