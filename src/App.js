import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from '../src/Pages/Login';
import Vote from '../src/Pages/Vote';
import {useEffect, useState} from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(()=>{
     if(localStorage.getItem("isAuth")){
      setIsAuth(true);
     }else{
      setIsAuth(false);
     }
  },[isAuth])

  return (
    <div >
     <Router>
      <Routes>
        {!isAuth&&<Route path="/" element={<Login setUserId={setUserId} isAuth={isAuth} setIsAuth={setIsAuth}/> }/> }
         <Route path="/vote" element={<Vote userId={userId} setUserId ={setUserId} isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
      </Routes>
     </Router>

    </div>
  );
}

export default App;
