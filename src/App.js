import React from 'react';
import NewsletterForm from './components/NewsletterForm';
import './style.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1>DEV@Deakin</h1>
      <NewsletterForm />
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
