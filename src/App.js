import './App.css';
import Service from './Components3/Services/service';
import GoogleNews from './Components3/Header/header.jsx'
import {useState} from "react"
// import App2 from './App2';
// import Form from './Components2/InsuranceForm/Form';
// import Content from './Components/Content/content';
// import Footer from './Components/Footer/footer';
// import Headers from './Components/Header/header';
// import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [Search,setSearch] = useState("everything")
  console.log(Search,"kkk")
  return (
    <div className="App">
      {/* <Headers/>
      <Router>
        <Routes>
          <Route path='/content' element={<Content/>}></Route>
          <Route path='/form' element={<Form/>}></Route>
        </Routes>
      </Router>
      <Footer/> */}
      {/* <App2/> */}
      <GoogleNews setsearchs={setSearch}/>
     <Service Google={Search}/>
      
      
 
    </div>
  );
}

export default App;
