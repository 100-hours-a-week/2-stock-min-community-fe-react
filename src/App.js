import './App.css';
import { Main } from './pages/Main/Main';
import { Login } from './pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function MainPage() {
  return <Main />;
}
function LoginPage() {
  return <Login />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
