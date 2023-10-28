import { Route, Routes } from 'react-router-dom';
import Navigation from './Components/Routes/Navigation/Navigation';
import Home from './Components/Routes/Home/Home';
import SignIn from "./Components/Routes/Sign-in/SignIn"


const Shop = () => {
  return <h1>I am the shop page</h1>
}


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='sign-in' element={<SignIn/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
