import React from "react";
import "./Messages.css";

class Message extends React.Component {
  render() {
    let message;
    let today = new Date().getDay();
    if (today === 0) {
      message = (
        <div className="sunday"> Dzisiaj niedziela, więc zamknięte!</div>
      );
    } else {
      message = <div className="weekday"> Dzisiaj otwarte! </div>;
    }
    return message;
  }
}

export default Message;
