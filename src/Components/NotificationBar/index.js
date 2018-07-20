import React from 'react';
import './style.css';

class NotificationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: ''
    };
    this.hideNotificationBar = this.hideNotificationBar.bind(this);
  }

  hideNotificationBar() {
    this.setState({
      className: 'hidden'
    });
  }

  transformMessage({message}) {
    return `${message} added to cart.`;
  }

  render() {
    const message = this.transformMessage(this.props);
    const {className} = this.state;
    return (
      <p className={className}>{message}</p>
    );
  }

  startTimer() {
    setTimeout(this.hideNotificationBar, 3000);
  }

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate() {
    this.startTimer();
  }


}

export default NotificationBar;
