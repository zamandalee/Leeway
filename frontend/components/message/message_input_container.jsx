import { connect } from 'react-redux';
import { createMessage } from '../../actions/message_actions';
import MessageInput from './message_form';

export const mapStateToProps = ({ session, entities }) => ({
  currentUserId: session.id,
  currentChat: 1
});

export const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
