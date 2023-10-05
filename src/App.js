import Navbar from "./components/Navbar.js";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js'; 
import './App.css';
import Collections from "./pages/Collections.js";
import NftDetails from "./pages/NftDetails.js";
import Profile from "./pages/Profile.js";
import ProfileDetails from "./pages/ProfileDetails.js";
import CollectionDetails from "./pages/CollectionDetails.js";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/collections'>
          <Route index element ={<Collections/>}/>
          <Route path='nftdetails/:id' element={<NftDetails/>}/>  
        </Route>
        <Route path='/profile'>
          <Route index element = {<Profile/>}/>
          <Route path='profiledetails' element={<ProfileDetails/>}/>
          <Route path='collectiondetails' element={<CollectionDetails/>}/>
        </Route>  
        
      </Routes>
      
    </div>
  );
}

export default App;
