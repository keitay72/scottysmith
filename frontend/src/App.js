// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import WatchList from "./components/WatchList";
import StockNews from "./components/StockNews";
import StockDetailPage from "./components/StockDetailPage";
import ImRich from "./components/ImRich";

function App() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  if (!sessionUser) {

    return (
      <>
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route path="/" exact>
              <SplashPage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Redirect to="/" />
          </Switch>
        )}
      </>
    );

  } else {

    return (
      <>
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route path="/" exact>
              <ImRich />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route path="/stocks/:symbol">
              <StockDetailPage />
              {/* <WatchList /> */}
            </Route>
          </Switch>
        )}
      </>
    )
  }

}

export default App;