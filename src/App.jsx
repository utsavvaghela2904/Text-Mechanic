import { useState } from 'react';
import './App.css';
import Alert from './components/Alert.jsx';
import Navbar from './components/Navbar.jsx';
import TextForm from './components/TextForm.jsx';

function App() {
  const [mode, setMode] = useState('light');

  const [btnText, newbtnText] = useState('Enble Dark Mode');

  const [alert, setAlert] = useState (null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = 'black';
      document.body.style.color = 'white';
      newbtnText("Enble Light Mode");
      showAlert("Dark Mode Has Ben Enble", "success");
    } else {
      setMode('light')  
      document.body.style.color = 'black'
      document.body.style.background = 'white'
      newbtnText("Enble Dark Mode")
      showAlert("Light Mode Has Ben Enble", "success");
    }
  }
  return (
    <>
      <Navbar title="SIT" aboutText="Contact  Us" mode={mode} toggleMode={toggleMode} btnText={btnText} />
      <Alert alert={alert}/>
      <TextForm heading="Enter Text To Analyse Below" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
    </>
  );
}

export default App; 