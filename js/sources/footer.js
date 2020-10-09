import React from "react";

import icon_vk from "@i/icon_vk.svg"
import icon_ok from "@i/icon_ok.svg"

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer__wrap">
            <div className="title">Контакты</div>
            <p className="footer__text">+7 (908) 133-22-03</p>
            <div className="footer__info">
              <p><b>Адрес:</b> г. Воронеж, ул. Фридриха Энгельса, 48</p>
              <p>
                <b>Я в социальных сетях:</b>
                <a href="" className="footer__icon"><img src={icon_vk} alt="Вконтакте"/></a>
                <a href="" className="footer__icon"><img src={icon_ok} alt="Одноклассники"/></a>
              </p>
              <p><b>E-mail:</b> <a href="mailto:igamail@inbox.ru">igamail@inbox.ru</a></p>
            </div>
          </div>
        </div>
      </footer>
    )
  }

}

export default Footer