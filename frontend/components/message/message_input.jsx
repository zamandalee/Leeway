import React from 'react';
import { merge } from 'lodash';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: '', messageable_type: 'Channel'};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.messageInput.focus();
  }

  componentWillReceiveProps(nextProps) {
    // if( this.props.currentChat.id !==  nextProps.currentChat.id) {
    //   this.setState({body: ''});
    // }
  }

  update() {
    return e => {
      this.setState({body: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = merge({}, this.state, {messageable_id: this.props.currentChatId});
    this.props.createMessage(message);
    this.setState({body: ''}); //have this until you're switching between channels
  }

  render() {
    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="message-input"
          onChange={this.update()}
          value={this.state.body}
          placeholder='Message'
          ref={(input) => { this.messageInput = input; }}/>
      </form>
    );
  }
}

export default MessageInput;
