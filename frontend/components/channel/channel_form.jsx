import React from 'react';
// implement user search later

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      private: this.props.private
    };
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state);
  }

  render() {
    return (
      <div className="channel-form">
        <form onSubmit={this.handleSubmit}>
          <h1 className="form-title">{this.props.formType}</h1>
          <p>"Channels are where your members communicate. They're best when organized around a topic - #leads, for example."</p>

          <label>
            <h2>Title</h2>
            <input
              className="title-input"
              type='text'
              placeholder='#  e.g. leads'
              value={this.state.title}
              onChange={this.update('title')}>
            </input>
          </label>

          <div className='buttons-container'>
            <button className='cancel' onClick={this.props.clearModal}>Cancel</button>

            <button
              className='submit'
              disabled={this.state.title}
              onClick={this.submit}>
              {this.props.formType}
            </button>
          </div>
        </form>
      </div>
    );
  }

}
