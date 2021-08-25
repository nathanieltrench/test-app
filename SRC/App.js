import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navigation from "./Navigation";

class App extends React.Component {
  componentDidUpdate(prevProps) {
    // NOTE: in order to have access to this information, you will need
    // to wrap this component in the `withRouter` HOC (higher order component)

    const { location: { pathname } } = this.props;
    const previousLocation = prevProps.location.pathname;

    if (pathname !== previousLocation) {
      window.Appcues.page();
    }
  }

  
  render() {
    return (
      <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
           </Switch>
        </div>
    )
  }
}

export default App;
