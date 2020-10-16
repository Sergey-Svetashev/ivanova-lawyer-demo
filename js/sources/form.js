import React from "react";

class Form extends React.Component {

  render() {

    let submitClass = this.props.isRun ? "form__wrap open" : "form__wrap";

    return (
      <div key="form__wrap" className={submitClass}>
        <div className="form__cell">
          <form action="./form_handler.php" method="post">
            {this.props.closeBtn}
            <h3>Задайте мне вопрос</h3>
            <div className="form__field">
              <input type="text" name="fio" placeholder="Ваше имя" required/>
            </div>
            <div className="form__field">
              <input type="email" name="email" placeholder="Ваш e-mail" required/>
            </div>
            <div className="form__field">
              <textarea name="letter" id="letter" placeholder="Введите сообщение" required/>
            </div>
            <button className="button" type="submit">Отправить</button>
          </form>
        </div>
      </div>
    )
  }

}

export default Form