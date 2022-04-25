
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { UseEffectAPI } from './Component/UseEffect/UseEffectAPI';
import Khu from './Component/UseEffect/Khu';
import About from './Component/UseEffect/About';
import Header from './Component/UseEffect/Header';
import Todos from './Component/UseEffect/Todos';
import Home from './Component/UseEffect/Home';
import Data from './Component/UseEffect/Data';
import Data1 from './Component/UseEffect/Data1';

function App() {
  return (
    <div className="App">
      {/* <UseEffectAPI/> */}
      
      <Home/>
      <Routes>
      <Route path="/" element={<Header />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/useeffect" element={<UseEffectAPI />}/>
        <Route path="/useeffect/:id" element={<Data />}/> 
          {/* </Route> */}
          <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <Data/>
        </main>
      }
    />
  
      </Routes>
      {/* <Todos/> */}
    </div>
  );
}

export default App;
