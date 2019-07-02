import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session
});

const mapDispatchToProps = dispatch => ({
    createNewUser: user => dispatch(createNewUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);