import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
// import NoteBookShowContainer from './notebook_show_page_container';

class NotebookIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openedNotes: false,
            openedActions: false
        }
        this.openNotesView = this.openNotesView.bind(this);
        this.closeNotesView = this.closeNotesView.bind(this);
        this.openActionsView = this.openActionsView.bind(this);
        this.closeActionsView = this.closeActionsView.bind(this);
        // this.enterShowPage = this.enterShowPage.bind(this);
    };

    openNotesView(e) {
        e.preventDefault();
        this.setState({ openedNotes: true })
    };

    closeNotesView(e) {
        e.preventDefault();
        this.setState({ openedNotes: false })
    }

    openActionsView(e) {
        e.preventDefault();
        this.setState({ openedActions: true })
    };

    closeActionsView(e) {
        e.preventDefault();
        this.setState({ openedActions: false })
    }

    // enterShowPage() {
    
    //     const notebookId = this.props.notebook.id;
    //     this.props.history.push(`/notebooks/${notebookId}`);
    // }

    sliceIdx(str) {
        return str.indexOf("@");
    };


    render() {
        const { notebook, author, openModal, deleteNotebook } = this.props

        const basicNotesView = () => (
            <div className='basic-notes-view'>
                <h3 className='notes-side-arrow' onClick={this.openNotesView}>▶︎</h3>
            </div>
        );

        const detailedNotesView = () => (
            <div className='detail-notes-view-modal'>
                <h3 className='notes-down-arrow' onClick={this.closeNotesView}>▼</h3>
                Notes will go here   
            </div>
        );

        const basicActionsView = () => (
            <div className='basic-actions-view'>
                <h3 className='actions-button' onClick={this.openActionsView}><i className="fa fa-bars"></i></h3>
            </div>
        );

        const detailedActionsView = () => (
            <div className='detail-actions-view-modal'>
                <h3 className='actions-button' onClick={this.closeActionsView}><i className="fa fa-bars"></i></h3>
                <ul onClick={this.closeActionsView} className='actions-dropdown' >
                    <li onClick={() => deleteNotebook(notebook.id)}>Delete Notebook</li>
                    <li onClick={() => openModal(`edit${(notebook.id).toString()}`)}>Rename Notebook</li>
                </ul>
            </div>
        );

    return(
        <tr>
                <th>{this.state.openedNotes ? detailedNotesView() : basicNotesView()}</th>
            <th onClick={this.closeActionsView}><i className="fas fa-book"></i>&#160;&#160;&#160;{notebook.title}</th>
                <th onClick={this.closeActionsView}>{author.slice(0, this.sliceIdx(author))}</th>
                <th onClick={this.closeActionsView}>{notebook.updated_at.slice(0, 10)}</th>
                <th>{this.state.openedActions ? detailedActionsView() : basicActionsView()}</th>
        </tr>
        );
    }
};

export default withRouter(NotebookIndexItem);