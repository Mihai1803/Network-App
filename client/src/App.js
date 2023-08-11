import React from 'react'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Alert from './components/layout/Alert'
import Dashboard from './components/dashboard/Dashboard'
import CreateProfile from './components/profile-forms/CreateProfile'
import PrivateRoute from './components/routing/PrivateRoute'
import './App.css';
// Redux
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken' 
import { Provider } from 'react-redux'
import store from './store'



const App = () => {

  useEffect(() => {
    if(localStorage.token) {
      setAuthToken(localStorage.token)
    }
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar/>
          <Alert/>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            {/* <Route path='/dashboard' element={<PrivateRoute />}>
            </Route> */}
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/create-profile' element={<CreateProfile />} />
          </Routes>
        </>
      </Router>
    </Provider>
  );
}

export default App;
