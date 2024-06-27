import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import ProtectedRoute from "./components/Protected-route";
import HomePage from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/' element={<HomePage />} />
      </Route>
      <Route path='*' element={<Navigate to='/login' replace />} />
    </Routes>
  );
}

export default App;
