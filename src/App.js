import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home'
import Contact_Us from "./Components/ContactUs";
import Remobilization from "./Components/Home/Remobilization";
import VerifyCeritificate from "./Components/Home/VerifyCertificate";
import PaymentStatus from "./Components/Home/PaymentStatus";
import MainSite from "./Components/Home/MainSite";
import CheckSenateList from "./Components/Home/CheckSenateList";
import GraduationList from "./Components/Home/GraduationList";
import AccreditedInstitution from "./Components/Home/AccreditedInstitution";
import LoginHere from "./Components/Home/LoginHere";

function App() {
  return (
   
      <div className="App">
      <Router>
      <NavBar />
      
      <Switch>
        
          <Route exact path="/" component={Home} />
          <Route path="/payment" component={PaymentStatus} />
          <Route path="/contact" component={Contact_Us} />
          <Route path="/remobilize" component={Remobilization} />
          <Route path="/verify" component={VerifyCeritificate} />
          <Route path="/payment" component={PaymentStatus} />
          <Route path="/main site" component={MainSite} />
          <Route path="/ check senate list" component={CheckSenateList} />
          <Route path="/ graduation list" component={GraduationList} />
          <Route path="/ accredited institution" component={AccreditedInstitution} />
          <Route path="/ login" component={LoginHere} />

      </Switch>
      
      </Router>
    </div>
  
  );
}

export default App;
