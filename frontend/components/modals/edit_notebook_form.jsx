import React from 'react';
import { withRouter } from 'react-router-dom';

class EditNotebookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.notebook;
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearErrors();
        this.props.updateNotebook(this.state).then(this.props.closeModal);
    };

    updateTitle(title) {
        return (e) => {
            this.setState({ [title]: e.currentTarget.value })
        };
    };

    renderErrors() {
        if (this.props.errors) {
            return (
                <ul className='errors'>
                    {this.props.errors.map((error, idx) => (
                        <li key={`error-${idx}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        };
    };

    render() {
        
        return (
            <div className='notebook-form-container'>
                <form className="notebook-form">
                    <h1 className='notebook-title'>Rename Notebook</h1>
                    <i className="fas fa-times" onClick={this.props.closeModal}></i>
                    <label>Name
                        <input type="text" className='notebook-input' value={this.state.title} onChange={this.updateTitle("title")} placeholder="Notebook name" />
                    </label>
                    {this.renderErrors()}
                    <div className='new-nb-btns'>
                        <button className='cancel' onClick={this.props.closeModal}>Cancel</button>
                        <button className='continue' onClick={this.handleSubmit}>Continue</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(EditNotebookForm);