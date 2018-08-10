import React from 'react';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: '', chatId: props.currentChat};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return e => {
      this.setState({body: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMessage(this.state);
  }

  render() {
    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="message"
          onChange={this.update}
          value={this.state.body}
          placeholder='Message'/>
      </form>
    );
  }
}

export default MessageInput;
