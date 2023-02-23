import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Search from "./components/search";
import { GalleryProvider } from "./context/GalleryContext";
function App(){
  return(
    <GalleryProvider>
      <Router>
        <Header>
          <Switch>
            <Route exact path="/" component={Gallery}/>
            <Route path="/mountains" render={()=><Gallery category="mountains"/>}/>
            <Route path="/beaches" render={()=><Gallery category="beaches"/>}/>
            <Route path="/birds" render={()=><Gallery category="birds"/>}/>
            <Route path="/food" render={()=><Gallery category="food"/>}/>
            <Route path="/search" component={Search}/>




          </Switch>
        </Header>
      </Router>
    </GalleryProvider>
  )
}
export default App;