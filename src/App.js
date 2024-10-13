import React from 'react';
import './App.css';
import TopLeftButtonWithList from './topleftbutton';
import GroceryList from './GroceryList';  // Import the grocery list component
import RequestQuoteForm from './RequestQuoteForm';  // Import the request quote form component

function App() {
  return (
    <div>
      <h1 className='head'>SASP TRADERS</h1>
      <TopLeftButtonWithList />

      {/* Request Quote button */}
      <RequestQuoteForm />

      
    </div>
  );
}

export default App;
