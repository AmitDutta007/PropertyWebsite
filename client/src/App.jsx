import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Profile, About, SignIn } from './pages/index'
import Header from './components/Header'
import SignUp from './pages/SignUp'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path='/createlisting' element={<CreateListing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
