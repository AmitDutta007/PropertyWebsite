import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Profile, About, SignIn } from './pages/index'
import Header from './components/Header'
import SignUp from './pages/SignUp'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
