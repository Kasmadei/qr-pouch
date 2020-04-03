import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import mainReducer from './src/services/reducer'
import Navigation from './src/routes/drawer';

const store = createStore(mainReducer, applyMiddleware(thunkMiddleware))

export default function App() {
  return (
    <Provider store={store}>
        <Navigation />
      </Provider>
  );
}


