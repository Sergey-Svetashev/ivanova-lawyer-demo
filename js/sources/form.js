import React from "react";

class Form extends React.Component {

  render() {

    let submitClass = this.props.isRun ? "form__wrap open" : "form__wrap";

    return (
      <div key="form__wrap" className={submitClass}>
        <div className="form__cell">
          <form action="" method="post">
            {this.props.closeBtn}
            <h3>Задайте мне вопрос</h3>
            <div className="form__field">
              <input type="text" placeholder="Ваш e-mail" required/>
            </div>
            <div className="form__field">
              <textarea name="letter" id="letter" placeholder="Введите сообщение" required/>
            </div>
            <button className="button">Отправить</button>
          </form>
        </div>
      </div>
    )
  }

}

export default Form