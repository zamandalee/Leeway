import React from 'react';
import DeleteMessageButton from './delete_message_button';

class MessageFeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};

    this.hideDeleteButton = this.hideDeleteButton.bind(this);
    this.showDeleteButton = this.showDeleteButton.bind(this);
  }

    hideDeleteButton() {
      this.setState( {visible: false} );
    }

    showDeleteButton() {
      if( this.props.currentUserId === this.props.message.author_id ) {
        this.setState( {visible: true} );
      }
    }

    render() {
      const { imgSrc, currentUserId, message } = this.props;

      return (
        <li onMouseOver={this.showDeleteButton}
          onMouseOut={this.hideDeleteButton}>

          <div className="message">
            <div><img src={imgSrc}/></div>

            <div className="message-content">

              <div className="author-timestamp-deletebttn">
                <div className="message-author">{message.author}</div>
                <div className="message-timestamp">{message.timestamp}</div>

                <div className="message-delete-div"><DeleteMessageButton message={message} visible={this.state.visible}/></div>
                <div className="message-edit-div"><EditMessageButton message={message} visible={this.state.visible}/></div>
              </div>

              <div className="message-body">{message.body}</div>
            </div>

          </div>
        </li>
      );
    }
}

export default MessageFeedItem;
