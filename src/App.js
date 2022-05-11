import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile/Profile';
function App() {
  return (
    <div className="App">
      <Profile
      fullName="oumaima salhi" 
      bio="Networks and telecommunications" 
      profession="web developer"
      imge= "image"
       />
    </div>
  );
}

export default App;



