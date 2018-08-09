import React from 'react';
import { connect } from 'react-redux';
import Errors from './errors';

const mapStateToProps = state => ({
  errors: state.errors.session
})

export default connect(mapStateToProps, mapDispatchToProps)(Errors);
