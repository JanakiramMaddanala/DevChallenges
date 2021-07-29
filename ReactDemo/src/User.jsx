import React, { useEffect } from 'react';
import { connect } from 'react-redux';

export const User = ({user, onUserRemove}) => {
    return <div>{user.id} - {user.name} <button onClick={onUserRemove}>X</button></div>;
}

const Users = ({users, dispatch}) => {
    const onUserRemove = (id) => {
        dispatch({ type: 'DELETE_USER', payload: id})
    }

    useEffect(() => {
        dispatch({type: 'FETCH_USERS'})
    },[dispatch])

    return users.map(user => <User key={user.id} user={user} onUserRemove={() => onUserRemove(user.id)}/>)
}

const mapStateToProps = (state) => {
    return { users: state.users}
}

export default connect(mapStateToProps)(Users);