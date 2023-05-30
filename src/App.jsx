
import Perfil from './components/Perfil';
import AuthLayout from './layouts/AuthLayout';
import {BrowserRouter, Route, Routes } from  'react-router-dom';
import CreaCvIa from './pages/CreaCvIa';
import CvCorregido from './pages/CvCorregido';
import AplicaJobs from './pages/AplicaJobs';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        
          <Route  path='/' element={<AuthLayout/>}>

              <Route index element={<Perfil/>} />
              <Route path='crea-cv-ia' element={<CreaCvIa/>} />
              <Route path='cv-corregido' element={<CvCorregido/>} />
              <Route path='aplica-jobs' element={<AplicaJobs/>} />

          </Route>
          
      </Routes>
      </BrowserRouter>
  )
}

export default App
