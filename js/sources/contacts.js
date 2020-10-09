import React from 'react';

class Contacts extends React.Component {
  render() {
    return (
      <section className="contacts">
        <div className="container">
          <h1 className="title">Как меня найти</h1>
          <div className="contacts__map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A1c9be47cb89d6fdd11814570fd0d4e50f5e6e9cd602b3783bbcdbcf087a1028e&amp;source=constructor"
              frameBorder="0" />
          </div>
        </div>
      </section>
    )
  }
}

export default Contacts