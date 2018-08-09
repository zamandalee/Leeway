import React from 'react';
import { connect } from 'react-redux';
import { signup, eraseErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formHeader: 'Sign up for Leeway',
  formType: 'Sign Up'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  eraseErrors: () => dispatch(eraseErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
