import React from 'react'
import NavBar from './Components/Js-Files/navBar/NavBar';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InTheaters from './Components/Js-Files/InTheators/InTheators';
import HomePage from './Components/Js-Files/HomePage/HomePage';
import ComingSoon from './Components/Js-Files/CommingSoon/ComingSoon';
import MostPopularMovies from './Components/Js-Files/Popular/MostPopularMovies';
import MostPopularSeries from './Components/Js-Files/Popular/MostPopularSeries';
import Top250Series from './Components/Js-Files/Top250/Top250Series';
import Top250Movies from './Components/Js-Files/Top250/Top250Movies';
import ItemDetailPage from './Components/Js-Files/FilmDetails/ItemDetailPage';
import ActorDetail from './Components/Js-Files/FilmDetails/ActorDetail';
import WatchList from './Components/Js-Files/WatchList/WatchList';
import SearchBox from './Components/Js-Files/SearchBox/SearchBox';
import ErrorBoundary from './Components/Js-Files/ErrorBounderies/ErrorBoundary';


const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/_In_Theaters" component={InTheaters} exact />
      <Route path="/_Coming_Soon" component={ComingSoon} exact />
      <Route path="/_Trending_Movies" component={MostPopularMovies} exact />
      <Route path="/_Trending_Series" component={MostPopularSeries} exact />
      <Route path="/_Most_Rated_Movies" component={Top250Movies} exact />
      <Route path="/_Most_Rated_Series" component={Top250Series} exact />
      <Route path="/_movieWatchList" component={WatchList} exact />
      <Route path="/searchedItems" component={SearchBox} />
      {/* <ErrorBoundary> */}
      <Route path="/:id" component={ItemDetailPage} exact />
      {/* </ErrorBoundary> */}
      <Route path="/Actor/:actorId" component={ActorDetail} exact />
    </Switch>
  </Router>
);

export default App;
