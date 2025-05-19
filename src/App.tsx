import { Route, Routes } from 'react-router';
import Home from './routes/Home';
import Layout from './components/Layout';
import Discord from './routes/Discord';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="discord" element={<Discord />} />
      </Route>
    </Routes>
  );
}

export default App;
