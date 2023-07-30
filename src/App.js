import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import textReducer from './redux/reducers';
import Home from './Home';
import Page from './Page';
import './App.css';

const store = createStore(textReducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        <header>
          <nav>
            <a href="/">Home</a>
            <br />
            <br />
            <a href="/page">Page</a>
          </nav>
        </header>
        <main>
          <Home />
          <Page />
        </main>
      </div>
    </Provider>
  );
}

export default App;
