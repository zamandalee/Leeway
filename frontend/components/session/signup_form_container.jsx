import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { SessionForm } from './session_form';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'Sign up for'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
