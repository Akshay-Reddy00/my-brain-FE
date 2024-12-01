import { Dashboard } from './pages/dashboard'
import { SignIn } from './pages/SignIn'
import { Signup } from './pages/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return <BrowserRouter>
  <Routes>
    <Route path="/signup" element={<Signup />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/dashboard" element={<Dashboard />} />
    TODO: Share endpoint

  </Routes>
  </BrowserRouter>
  
}

export default App
