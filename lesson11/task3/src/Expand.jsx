import React, { Component } from "react";

class Expand extends Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.hideDialog}>
            {this.state.isOpen ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </button>
        </div>

        {this.state.isOpen ? (
          <div className="expand__content">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default Expand;

// Алго
// создать стейт
// создать кнопку (по умолчанию фолс)
// кнопка показывает ипрячет елемернт в зависимости от стейта
// в кнопке будет иконка стрелка, котораю меняет направление в зависимости от стейта
//
