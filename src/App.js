import { useEffect } from 'react';
import './App.css';
import firebase from './firebase';
function App() {
  useEffect(() => {
    getTokens();
  }, [])
  const getTokens = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('token:', token);
      return token;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <h2>Web push notification</h2>
    </div>
  );
}

export default App;
