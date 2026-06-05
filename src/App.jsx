import "./App.css"; 
import Nav from "./components/Navigation/Nav";
import Contact from "./components/ContactHeader/Contact";
import ContForm from "./components/ContactForm/ContForm";

const App = () => {
  return (
    <div>
      <Nav />
      <main className="main_container">
          <Contact />
          <ContForm />
      </main>
    </div>
  );
}

export default App;