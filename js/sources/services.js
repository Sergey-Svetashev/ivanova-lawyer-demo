import React from 'react';

class Services__item extends React.Component {
  render() {
    return (
      <div className="services__item">
        <div className="services__cell">
          <p className="services__text">{this.props.text}</p>
        </div>
        <div className="services__cell">
          <div className="services__price">{this.props.price}</div>
        </div>
      </div>
    )
  }
}

class Services extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <section className="services">
        <div className="container">
          <h1 className="title">Услуги и цены</h1>
          <div className="services__wrap">
            <div className="services__case services__case_01">
              <Services__item
                text="Трудовые споры, восстановление на работе, взыскание невыплаченной заработной платы и компенсации
                за просрочку выплаты, признание незаконным удержания заработной платы с работника:"
                price="от 7 000 руб"/>
              <Services__item
                text="Ведение дел гражданско-правовой специализации в судах общей юрисдикции и
                арбитраже:" price="от 10 000 руб"/>
              <Services__item
                text="Вопросы, связанные с защитой прав потребителей:" price="от 7 000 руб"/>
              <Services__item
                text="Экономические споры:" price="от 15 000 руб"/>
            </div>
            <div className="services__case services__case_02">
              <Services__item
                text="Признание права собственности на движимое и недвижимое имущество,установление факта
                добросовестного и открытого владения имуществом, как своим собственным:" price="от 10 000 руб"/>
              <Services__item
                text="Юридическое обслуживание предприятий:" price="от 10 000 руб"/>
              <Services__item
                text="Юридическая проверка контрагента:" price="от 10 000 руб"/>
            </div>
            <div className="services__case services__case_03">
              <Services__item
                text="Юридическое сопровождение сделок с недвижимостью:" price="от 10 000 руб"/>
              <Services__item
                text="Помощь по семейным спорам и наследственным делам:" price="от 10 000 руб"/>
              <Services__item
                text="Жилищные вопросы:" price="от 10 000 руб"/>
              <Services__item
                text="Земельные споры:" price="от 10 000 руб"/>
            </div>
            <div className="services__case services__case_04">
              <Services__item
                text="Оспаривание административных штрафов:" price="от 7 000 руб"/>
              <Services__item
                text="Помощь адвоката по ДТП, обжалование постановлений должностных лиц,
                взыскание денежных средств со страховых компаний:" price="от 10 000 руб"/>
            </div>
            <div className="services__case services__case_05">
              <Services__item
                text="Ведении уголовных дел различной категории (должностные преступления, преступления в сфере
                экономики, преступления против личности, против общественной безопасности и порядка, преступления
                в области безопасности дорожного движения и др.)" price="от 10 000 руб"/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Services;