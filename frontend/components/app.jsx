import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavigationBarContainer from './navigation_bar/navigation_bar_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Notebooks from './notebooks/notebooks';
import NotesContainer from './notes/notes_container';
import NotebookShowPageContainer from './notebooks/notebook_show_page_container';
import NoteDetailContainerForNotebooks from './notes/note_detail_container_for_notebooks';
import NoteDetailContainerForNotes from './notes/note_detail_container_for_notes';

const App = () => (
    <div>
        <Route path="/" component={NavigationBarContainer} />
       <Switch>
            <ProtectedRoute path="/notes" component={NotesContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <ProtectedRoute path="/notebooks/:notebookId" component={NotebookShowPageContainer} />
            <ProtectedRoute path="/notes/:noteId" component={NoteDetailContainerForNotes} />
            <ProtectedRoute path="/notebooks/:notebookId/notes/:noteId" component={NoteDetailContainerForNotebooks} />
            <ProtectedRoute path="/notebooks" component={Notebooks} />
        </Switch>
    </div>
);

export default App;