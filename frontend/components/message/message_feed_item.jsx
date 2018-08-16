import React from 'react';
import DeleteMessageButton from './delete_message_button';

class MessageFeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hide: true};

    this.hideDeleteButton = this.hideDeleteButton.bind(this);
    this.showDeleteButton = this.showDeleteButton.bind(this);
  }

    hideDeleteButton() {
      this.setState( {hide: true} );
    }

    showDeleteButton() {
      console.log("CURRENT USER ID", this.props.currentUserId);
      console.log("AUTHOR ID", this.props.message.author_id);
      if( this.props.currentUserId === this.props.message.author_id ) {
        this.setState( {hide: false} );
        console.log(this.state);
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

                <DeleteMessageButton message={message} hide={this.state.hide}/>
              </div>

              <div className="message-body">{message.body}</div>
            </div>

          </div>
        </li>
      );
    }
}

export default MessageFeedItem;
