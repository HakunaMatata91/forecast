import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import News from './components/News/News';
import MainContent from './components/MainContent/MainContent';
import { HashRouter, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      // BrowserRouter’s responsibility to store all the components and its routes as an object.
      //Router is a statement that holds the specific path of the app along with the component’s name and renders it once it matches the URL.
      <HashRouter>
        <main className="for_page">
          <Header />
            <div className="pages">
            <Switch>
              <Route path="/" exact component={MainContent} /> 
              <Route path="/news" exact component={News} />
             </Switch>
            </div>
        <Footer />
        </main>
      </HashRouter>
    );
  }
}


export default App;
