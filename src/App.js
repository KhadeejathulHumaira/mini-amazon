import './App.css';
import {useState,useEffect} from 'react'
import Header from './components/Header'
import Cart from './components/Cart'
import Home from './components/Home'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import { db } from './components/Firebase'


function App() {
    

  const[ cartItems,setCartItems]=useState([]);

  const getCartItems=()=>{
      db.collection('cartitems').onSnapshot((snapshot)=>{
         let tempItems=[]
         tempItems=snapshot.docs.map((doc)=>({
             id:doc.id,
             items:doc.data()

         }))
         setCartItems(tempItems)
      })
  }
  useEffect(()=>{
    getCartItems()
  },[])
  return (
    <Router>
    <div className="App">
      <Header/>
      
      <Switch>
        <Route path="/cart">
           <Cart cartItems={cartItems}/>
        </Route>
        <Route path="/"> 
          <Home/>
      </Route>
      
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
