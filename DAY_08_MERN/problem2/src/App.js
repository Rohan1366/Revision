import logo from './logo.svg';
import './App.css';
import UserForm from './Components/UserForm ';
import ThemeSwitcher from './Components/ThemeSwitcher';
import { ThemeProvider } from './Context/ThemeContext ';

function App() {
  return (
    <div className="App">
     <ThemeProvider>
     <UserForm/>
     <ThemeSwitcher/>
     </ThemeProvider>
    </div>
  );
}

export default App;
