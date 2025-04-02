import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
  <div>
<Navigation/>
<main className="maincontainer" >
<ContactHeader/>
<ContactForm/>
</main>

  </div>
  );
}
export default App;