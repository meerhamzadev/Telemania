import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WatchListContextProvider } from './Components/Js-Files/WatchList/WatchListContext';
import { SearchBoxContext } from './Components/Js-Files/SearchBox/SearchBoxContext';
import { DataFetchingContextProvider } from './Components/Js-Files/Shared_Component/DataFetchingContext';



ReactDOM.render(
  <React.StrictMode>
    <DataFetchingContextProvider>
      <WatchListContextProvider>
        <SearchBoxContext>
          <App />
        </SearchBoxContext>
      </WatchListContextProvider>

    </DataFetchingContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
