import Landing from './Pages/Landing'
import LoginPage from './Pages/LoginPage/LoginPage'
import Signup from './Pages/Signup/SignupPage'
import Home from './Pages/Home'
import MainLayout from './components/layouts/MainLayout'
import Explore from './Pages/Explore'
import Chat from './Pages/Chat'
import Notifications from './Pages/Notifications'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />


          <Route path="/app" element={<MainLayout />}>
            
            <Route index element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="chat" element={<Chat />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
          <Route path="/home" element={<Navigate to="/app" replace />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
