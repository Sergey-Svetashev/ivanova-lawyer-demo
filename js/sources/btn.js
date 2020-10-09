import React from "react";

class Button extends React.Component {
  render() {
    let buttonClass = this.props.isRun ? "button__wrap disabled" : "button__wrap";

    return (
      <div className={buttonClass}>
        <button className="button" onClick={this.props.clicker}>
          {this.props.text}
        </button>
      </div>
    )
  }
}

export default Button