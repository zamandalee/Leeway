import React from 'react';
import { Link } from 'react-router-dom';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      private: this.props.private
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.titleInput.focus();
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then( () => {
      this.props.history.push('/workspace');
    });
  }

  render() {
    return (
      <div className="channel-create-container">
        <Link className="x-button" to="/workspace">&times;</Link>
        <h1 className="form-title">{this.props.formType}</h1>
        <p>Channels are where your members communicate. They are best when organized around a topic — #leads, for example.</p>

        <form className="channel-form" onSubmit={this.handleSubmit}>
          <label>
            <h2>Title</h2>
            <input
              type="text"
              className="title-input"
              onChange={this.update("title")}
              value={this.state.title}
              placeholder="#  e.g. leads"
              ref={(input) => { this.titleInput = input; }}
              />
          </label>

          <div className="channel-form-buttons">
            <Link className="cancel-button" to="/workspace">Cancel</Link>

            <button
              className="submit-button"
              disabled={!this.state.title}>
              {this.props.formType}
            </button>
          </div>
        </form>
      </div>
    );
  }

}

export default ChannelForm;
