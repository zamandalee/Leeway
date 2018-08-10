import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: '', chatId: props.currentChat};
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  update() {
    return e => {
      this.setState({body: e.target.value});
    };
  }

  handleSumbit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render() {
    return (
      <div className="workspace">
        <h1>Channel Name</h1>
        <MessageFeed />
        <form>
          <input
            type="text"
            className="message"
            onChange={this.update}
            value={this.state.body}
            placeholder='Message here'/>
        </form>
      </div>
    );
  }
}


export const mapStateToProps = state => ({

});

export const mapDispatchToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
