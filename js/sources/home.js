import React from 'react';
import Awards from './awards';

import Button from './btn';
import Form from './form';

import main_photo from "@i/header_photo.png";
import icon_qoutes from "@i/icon_qoutes.svg";
import citation_photo from "@i/citation_photo.jpg";
import {NavLink} from "react-router-dom";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.submitRun = this.submitRun.bind(this);
    this.submitStop = this.submitStop.bind(this);
    this.state = {submitIsRun: false}
  }

  submitRun() {
    this.setState({submitIsRun: true});
    document.documentElement.style.overflow = 'hidden';
    console.log(this)
  };

  submitStop() {
    document.documentElement.removeAttribute('style');
    this.setState({submitIsRun: false});
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      [
        <header key="header">
          <div className="container">
            <div className="header__wrap">
              <img src={main_photo} alt="Иванова Галина Анатольевна"/>
              <div className="header__over-title">Адвокат</div>
              <h1 className="header__title">Иванова Галина Анатольевна</h1>
              <p className="header__text">Предоставляет квалифицированную юридическую помощь от консультации до
                представительства в суде.
              </p>
              <Button isRun={this.state.isRun} clicker={this.submitRun} text="Заказать звонок"/>
            </div>
          </div>
        </header>,
        <section key="skill" className="skill">
          <div className="container">
            <div className="skill__wrap">
              <h1 className="title">Опыт</h1>
              <h2 className="skill__subtitle">более 20 лет</h2>
              <p className="honor__text">Являюсь членом адвокатской палаты Воронежской области. Регистрационный
                номер 36/455. Имею практический опыт полного юридического сопровождения деятельности предприятий
                различных организационно-правовых форм.
              </p>
              <p className="honor__text">Огромный опыт работы по представлению интересов юридических и физических лиц в
                арбитражных судах и судах общей юрисдикции по вопросам различной сложности.
              </p>
              <Button isRun={this.state.isRun} clicker={this.submitRun} text="Заказать звонок"/>
            </div>
            <Awards/>
          </div>
        </section>,
        <section key="citation" className="citation">
          <div className="container">
            <h1 className="title">Мое мнение</h1>
            <div className="citation__case">
              <div className="citation__cell">
                <p className="citation__text">Ничто не ценится так дорого и не стоит так дешево, как своевременно
                  подсказанная консультация и оказанная юридическая помощь.
                </p>
                <img src={icon_qoutes} className="citation__decore"/>
              </div>
              <div className="citation__cell">
                <img src={citation_photo} alt="Иванова Галина Анатольевна" className="citation__photo"/>
              </div>
            </div>
            <NavLink to="/services" className="button">Посмотреть услуги и цены</NavLink>
          </div>
        </section>,
        <Form isRun={this.state.submitIsRun}
          closeBtn={<span className="form__close" onClick={this.submitStop}/>}
        />
      ]
    )
  }

}

export default Home;