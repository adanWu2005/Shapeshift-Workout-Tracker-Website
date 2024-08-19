import { Route, Routes } from "react-router-dom";
import IntroPage from './Components/IntroPage/IntroPage';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Homepage from './Components/Homepage/Homepage';
import ProtectedRoute from './assets/protectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    
      <Route 
        path="/home" 
        element={
          <ProtectedRoute>
            <Homepage />
          </ProtectedRoute>
        }
      >
      </Route>
    </Routes>
  );
}

export default App;
