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

  componentWillReceiveProps(nextProps) {
    //uncomment once you're switching between channels
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
    this.props.createMessage(this.state);
    //this.props.createMessage({body: this.state.body, messageable_id: this.props.currentChat.id})
    this.setState({body: ''}); //have this until you're switching between channels
  }

  render() {
    return (
      <footer>
        <form className="message-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="message-input"
            onChange={this.update()}
            value={this.state.body}
            placeholder='Message'
            ref={(input) => { this.messageInput = input; }}/>
        </form>
      </footer>
    );
  }
}

export default MessageInput;
