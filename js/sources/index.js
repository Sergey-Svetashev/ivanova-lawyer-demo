import '@css/slick.css'
import '@css/_reset.sass'
import '@css/main.sass'
import '@css/media.sass'
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import {createBrowserHistory} from 'history'

import Home from './home';
import Services from './services';
import Contacts from './contacts';
import Footer from './footer';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.openMenu = this.openMenu.bind(this);
    this.state = {isOpen: false};
  }

  openMenu() {
    this.setState(function (state) {
      return state.isOpen = !state.isOpen;
    });
  }

  render() {
    return (
      <nav>
        <div className="container">
          <span className="nav__phone">+7 (908) 133-22-03</span>
          <span className={this.state.isOpen ? 'nav__button active' : "nav__button"} onClick={this.openMenu}/>
          <div className={this.state.isOpen ? 'nav__case open' : 'nav__case'}>
            <NavLink exact to="/" className="nav__item" onClick={this.openMenu}>Главная</NavLink>
            <NavLink to="/services" className="nav__item" onClick={this.openMenu}>Услуги</NavLink>
            {/*<NavLink to="/reviews" className="menu__item">Отзывы</NavLink>*/}
            {/*<NavLink to="/practice" className="menu__item">Практика</NavLink>*/}
            <NavLink to="/contacts" className="nav__item" onClick={this.openMenu}>Контакты</NavLink>
          </div>
        </div>
      </nav>
    )
  }

}

class App extends React.Component {
  render() {
    return (
      <Router history={createBrowserHistory}>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/services" component={Services}/>
          <Route path="/contacts" component={Contacts}/>
        </Switch>
        <Footer/>
      </Router>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));