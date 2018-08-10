import React from 'react';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: '', messageable_type: 'Channel', messageable_id: 1};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.messageInput.focus();
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
