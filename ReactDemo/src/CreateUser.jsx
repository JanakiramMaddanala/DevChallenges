import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/reducers';

const CreateUser = (props) => {
    const { id, name } = props.userForm;
    console.log(id, name);
    console.log(props);
    const onCreateClick = (e) => {
        e.preventDefault();
        props.dispatch({ type: 'CREATE_USER', payload: props.userForm})
    };

    const onInputChange = (e) => {
        console.log(e)
        const value = e.target.value;
        const name = e.target.name;
        props.dispatch({ type: 'USER_FORM_CHANGE', payload: { name, value } });
    };

    return (
        <>
            <div>
                <label htmlFor="id">ID</label>
                <input id="id" name="id" type="text" value={id || ''} onChange={onInputChange} />
            </div>
            <br/>
            <div onClickCapture={() => console.log("captured div")} onClick={() => console.log("clicked div")}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" value={name || ''} onChange={onInputChange} />
                <button onClick={() => console.log("clicked yellow")} onClickCapture={() => console.log("captured button")}>Create</button>
            </div>
        </>
    );
};

export const mapStateToProps = (state) => {
    return { userForm: state.userForm };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dummy: () => dispatch({type: 'DUMMY'}),
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
