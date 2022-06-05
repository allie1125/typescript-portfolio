import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Main from './main';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Main />} />
          <Route path='*' element={<div>404</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
