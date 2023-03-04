import './App.css';

// React Router V6
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Layouts
import NavBar from './app/components/NavBar';

// Pages
import Home from './app/pages/Home';
import Employees from './app/pages/Employees';
import InfoEmployee from './app/pages/InfoEmployee';
import NewEmployee from './app/pages/NewEmployee';
import EditEmployee from './app/pages/EditEmployee';
import ErrorPage from './app/pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col justify-between min-h-screen'>
        <NavBar />

        <main className="p-4 md:px-64">
          <Routes>
            <Route path='/' element={
              <Home />
            }></Route>

            <Route path='/inicio' element={
              <Home />
            }></Route>

            <Route path='/empleados' element={
              <Employees />
            }></Route>

            <Route path='/info_empleado/:id' element={
              <InfoEmployee />
            }></Route>

            <Route path='/nuevo_empleado' element={
              <NewEmployee />
            }></Route>

            <Route path={'/editar_empleado/:id'} element={
              <EditEmployee />
            }></Route>

            <Route path={'/*'} element={
              <ErrorPage />
            }></Route>
          </Routes>
        </main>

        <footer className="bg-stone-800 text-white text-center p-4">
          <address>copyright@kernel6995</address>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
