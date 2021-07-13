import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/navBar/NavBar';
import InTheaters from './Components/InTheators/InTheators';
import HomePage from './Components/HomePage/HomePage';
import ComingSoon from './Components/CommingSoon/ComingSoon';
import MostPopularMovies from './Components/Popular/MostPopularMovies';
import MostPopularSeries from './Components/Popular/MostPopularSeries';
import Top250Series from './Components/Top250/Top250Series';
import Top250Movies from './Components/Top250/Top250Movies';
import ItemDetailPage from './Components/FilmDetails/ItemDetails/ItemDetailPage';
import ActorDetail from './Components/FilmDetails/ActorDetails/ActorDetail';
import WatchList from './Components/WatchList/WatchList';
import SearchBox from './Components/SearchBox/SearchBox';
import ErrorBoundary from './Components/ErrorBounderies/ErrorBoundary';
import Footer from './Components/Footer/Footer';
import './App.css';


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
    <Footer />
  </Router>
);

export default App;
