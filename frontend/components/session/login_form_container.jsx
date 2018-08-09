import React from 'react';
import { connect } from 'react-redux';
import { login, eraseErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formHeader: 'Log in to Leeway',
  formType: 'Log In'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  eraseErrors: () => dispatch(eraseErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
