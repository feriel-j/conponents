
import './App.css';
import {ProfilePhoto} from './components/Profile/ProfilePhoto'
import {FullName} from './components/Profile/FullName'
import {Address} from './components/Profile/Address'
function App() {
  return (
    <div className="container">
      <h1> Welcome to my profile</h1>
      <ProfilePhoto/>
      <div className="comp">
      
      <FullName/>
      <Address/>
      </div>
    </div>
  );
}

export default App;
