import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import LoginPage from './components/LoginPage'
import MainImg from './components/HomeComponent/MainImg';
import NavbarBoots from './components/NavbarBoots';
import Footer from './components/Footer';


const LazyDetails = React.lazy(() => import('./components/DetailsComponent/Details'))
const LazyHome = React.lazy(()=> import('./components/HomeComponent/Home'))
const LazyBridalParty = React.lazy(()=> import('./components/BridalPartyComponent/BridalParty'))
const LazyRSVP = React.lazy(()=> import('./components/RSVPComponent/RSVP'))
const LazyRegistry = React.lazy(()=> import('./components/RegistryComponent/Registry'))
const LazyOurStoryParent = React.lazy(()=> import('./components/OurStoryComponent/OurStoryParent'))


function App() {
  const weddingGuest = {
    name: "Max",
    email: "wedding.guest@guest.com"
  } // Ideally this would be checked against a data base rather than hard-coded

  const [guest, setGuest] = useState({ email: "" })
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details)

    if (details.email == weddingGuest.email) {
      console.log("Logged in")
      setGuest({
        email: details.email
      })
    } else {
      console.log("email not found")
      setError("email not found")
    }
  }

  const Logout = () => {
    console.log("in the logout function")
    setGuest({ email: "" })
  }
  return (
    <>
      {(guest.email != "") ? (
        <>
          <NavbarBoots Logout={Logout} />
          <MainImg />
          <Routes>
            <Route
              path='/'
              element={
                <React.Suspense fallback='Loading...'>
                  <LazyHome />
                </React.Suspense>
              } />
            <Route
              path='/OurStory'
              element={
                <React.Suspense fallback='Loading...'>
                  <LazyOurStoryParent />
                </React.Suspense>
              } />
            <Route
              path='/BridalParty'
              element={
                <React.Suspense fallback='Loading...'>
                  <LazyBridalParty />
                </React.Suspense>
              } />
            <Route
              path='/Details'
              element={
                <React.Suspense fallback='Loading...'>
                  <LazyDetails />
                </React.Suspense>
              } />
            <Route
              path='/RSVP'
              element={
                <React.Suspense fallback='Loading...'>
                  <LazyRSVP />
                </React.Suspense>
              } />
            <Route
              path='/Registry'
              element={
                <React.Suspense fallback='Loading...'>
                  <LazyRegistry />
                </React.Suspense>

              } />
          </Routes>
          <Footer />
        </>
      )
      : (<LoginPage Login={Login} error={error} />)}
    </>
  );
}

export default App;