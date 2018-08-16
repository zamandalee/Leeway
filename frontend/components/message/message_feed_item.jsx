import React from 'react';
import DeleteMessageButton from './delete_message_button';

/* PROPS PASSED
<MessageFeedItem
  imgSrc={users[message.author_id].photoUrl}
  currentUserId={currentUserId}
  message={message}
  key={idx}/>
*/

class MessageFeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: false, editing: false, message: {}};

    this.hideEditDelete = this.hideEditDelete.bind(this);
    this.showEditDelete = this.showEditDelete.bind(this);

    //which functions do you need to bind? this.setState?
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
  }

    hideEditDelete() {
      this.setState( {visible: false} );
    }

    showEditDelete() {
      if( this.props.currentUserId === this.props.message.author_id ) {
        this.setState( {visible: true} );
      }
    }

    handleEditClick() {
      return e => {
        this.setState({editing: true});
        return (
          <div className="edit-message">
            <form onSubmit={this.handleEditSubmit}>
              <input
                className="edit-message-input"
                onChange={this.update('body')}
                value={this.props.message.body}/>
              <button
                className="edit-message-cancel"
                onClick={this.handleCancelEdit}>
                Cancel</button>
              <button
                className="edit-message-save">
                Save Changes</button>
            </form>
          </div>
        );
      };
    }

    //HAVE MESSAGE IN LOCAL STATE?? how to transfer data back to MessageFeed?
    update(field) {
      return e => {
        this.setState({message: {
          [field]: e.target.value,
          author_id: this.props.currentUserId,
          messageable_type: this.props.message.messageable_type,
          messageable_id: this.props.message.messageable_id}
        });
      };
    }

    handleCancelEdit() {
      return e => {
        this.setState( {editing: false} );
      };
    }

    handleEditSubmit(e) {
      e.preventDefault();
      this.props.updateMessage(this.state.message);
    }


    render() {
      const { imgSrc, currentUserId, message } = this.props;
      const visibility = this.state.visible ? 'visible' : '';

      return (
        <li onMouseOver={this.showEditDelete}
          onMouseOut={this.hideEditDelete}>

          <div className="message">
            <div><img src={imgSrc}/></div>

            <div className="message-content">

              <div className="author-timestamp-deletebttn">
                <div className="message-author">{message.author}</div>
                <div className="message-timestamp">{message.timestamp}</div>

                <div className="message-edit-div">
                  <button
                    className={ `edit-message-button-${visibility}` }
                    onClick={ this.handleEditClick() }>
                    &#x270E;
                  </button>
                </div>

                <div className="message-delete-div"><DeleteMessageButton message={message} visible={this.state.visible}/></div>
              </div>

              <div className={ `message-body-${visibility}` }>{message.body}</div>
            </div>

          </div>
        </li>
      );
    }
}

import { connect } from 'react-redux';
import { updateMessage } from '../../actions/message_actions';

const mapDispatchToProps = dispatch => ({
  updateMessage: message => () => dispatch(updateMessage(message))
});

export default connect(null, mapDispatchToProps)(MessageFeedItem);
