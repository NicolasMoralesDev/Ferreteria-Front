
import CookieConsent from '../components/CookieConsent/CookieConsent';
import Cookies from "universal-cookie";

function App() {

  const cookies = new Cookies();
  
  // Check if the user has already given cookie consent
  const cookieConsent = cookies.get("cookieConsent");
  
  return (
    <div className="App">
      
    {!cookieConsent && <CookieConsent />}
    </div>
  );
}

export default App;
