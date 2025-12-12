import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/contactHeader/ContactHeader'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm';



function App() {
  

  return (
    <>
    <Navigation/>
    <main className='main_container'>
      <ContactHeader/>
      <ContactForm/>
    </main>
    <ContactForm/>
    </>
  );
}

export default App;
