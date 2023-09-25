import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Module from './Pages/Module';
import ProtectedRoutes from './Utils/ProtectedRoutes';
import {ModulesProvider} from'./Utils/Context';


function App() {
  return (
    <div className="App">
      <ModulesProvider>
        <Router>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path='/' element={<Home />} />
              <Route path='/:moduleName' element={<Module  />} />
            </Route>
          </Routes>
        </Router>
      </ModulesProvider>
    </div>
  );
}

export default App;
