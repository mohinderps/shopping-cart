import React from 'react';
import './style.css';
import store from '../../Store';
import {setMessage} from '../../Actions';

class NotificationBar extends React.Component {
  constructor(props) {
    super(props);
    this.resetMessage = this.resetMessage.bind(this);
  }

  resetMessage() {
    store.dispatch(setMessage(''));
  }

  render() {
    const {message} = store.getState();
    return (
      <div className="notification-bar">{message}</div>
    );
  }

  componentDidUpdate() {
    if(this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(this.resetMessage, 3000);
  }

}

export default NotificationBar;
