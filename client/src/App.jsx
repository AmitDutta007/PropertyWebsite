import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Profile, About, SignIn } from './pages/index'
import Header from './components/Header'
import SignUp from './pages/SignUp'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path='/createlisting' element={<CreateListing />} />
          <Route path='/updatelisting/:listingId' element={<UpdateListing />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
