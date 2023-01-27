import './App.css';
import ResponsiveAppBar from './pages/Navbar';
import { Routes, Route} from 'react-router-dom';
import CreateAd from './pages/CreateAd';
import Dashboard from './pages/Dashboard';
import { Card } from '@mui/material';
import TextAdForm from './pages/TextAdForm';
import MediaAdForm from './pages/MediaAdForm';
import Submitted from './pages/Submitted';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/createads" element={<CreateAd/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/textadform" element={<TextAdForm />} />
        <Route path="/mediaadform" element={<MediaAdForm />} />
        <Route path="/submitted" element={<Submitted />} />
      </Routes>
      <Card/>
    </div>
  );
}

export default App;
