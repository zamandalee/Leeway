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
    this.state = {visible: false, editing: false, message: this.props.message};

    this.hideEditDelete = this.hideEditDelete.bind(this);
    this.showEditDelete = this.showEditDelete.bind(this);

    this.handleEditClick = this.handleEditClick.bind(this);
    this.editMode = this.editMode.bind(this);
    this.update = this.update.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

    hideEditDelete() {
      this.setState( {visible: false} );
    }

    showEditDelete() {
      if( this.props.currentUserId === this.props.message.author_id && !this.state.editing ) {
        this.setState( {visible: true} );
      }
    }


    handleEditClick() {
      return e => {
        this.setState({editing: true});
      };
    }

    editMode() {
      if( this.state.editing === true ) {
        return (
          <div className="edit-message-mode">
            <form onSubmit={this.handleEditSubmit}>
              <input
                className="edit-message-input"
                onChange={this.update}
                value={this.state.message.body}/>
              <br></br>
              <div className="edit-buttons">
                <button
                  type="button"
                  className="edit-message-cancel"
                  onClick={this.handleCancelEdit}>
                  Cancel</button>
                <button
                  className="edit-message-save">
                  Save Changes</button>
              </div>
            </form>
          </div>
        );
      } else {
        return (
          <div className="message-body">{this.props.message.body}</div>
        );
      }
    }

    //when you want to pass param, invoke w param and return func
    update(e) {
      this.setState({message: { body: e.target.value} });
    }

    handleCancelEdit() {
      this.setState( {editing: false} );
    }

    handleEditSubmit(e) {
      e.preventDefault();
      const message = { body: this.state.message.body,
                        id: this.props.message.id,
                        author_id: this.props.message.author_id,
                        messageable_type: this.props.message.messageable_type,
                        messageable_id: this.props.message.messageable_id };
      this.props.updateMessage(message);
      this.setState( {editing: false} );
    }


    render() {
      const { imgSrc, currentUserId, message } = this.props;
      const visibility = this.state.visible ? 'visible' : '';
      const editing = this.state.editing ? 'edit' : '';

      return (
        <li className="message"
          onMouseOver={this.showEditDelete}
          onMouseOut={this.hideEditDelete}>
            <div><img src={imgSrc}/></div>

            <div className="message-content">

              <header class="message-header">
                <div className="author-timestamp-div">
                  <span className="message-author">{message.author}</span>
                  <span className="message-timestamp">{message.timestamp}</span>
                </div>

                <div className="edit-delete-div">
                  <div className="message-edit-div">
                    <button
                      className={ `edit-message-button-${visibility}` }
                      onClick={ this.handleEditClick() }>
                      &#x270E;
                    </button>
                  </div>

                  <div className="message-delete-div"><DeleteMessageButton message={message} visible={this.state.visible}/></div>
                </div>
              </header>

              {this.editMode()}
            </div>

        </li>
      );
    }
}

import { connect } from 'react-redux';
import { updateMessage } from '../../actions/message_actions';

const mapDispatchToProps = dispatch => ({
  updateMessage: message => dispatch(updateMessage(message))
});

export default connect(null, mapDispatchToProps)(MessageFeedItem);
