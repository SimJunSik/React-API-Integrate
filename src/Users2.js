import React, { useState } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
// import useAsync from './useAsync';
// import User from './User';
import User2 from './User2';
import { useUsersState, useUsersDispatch, getUsers } from './UsersContext';

// async function getUsers(){
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
//     return response.data;
// }

function Users2(){
    // const [state, refetch] = useAsync(getUsers, [], true);
    // const { loading, data: users, error } = state;

    // const { data: users, error, isLoading, reload, run } = useAsync({ // run을 사용해서 버튼 눌렀을 때 호출
    //     // promiseFn: getUsers
    //     deferFn: getUsers
    // })
    const [userId, setUserId] = useState(null);
    const state = useUsersState();
    const dispatch = useUsersDispatch();

    const { loading, data: users, error } = state.users;

    const fetchData = () => {
        getUsers(dispatch);
    }

    if(loading) return <div>로딩중..</div>
    if(error) return <div>에러가 발생했습니다</div>
    if(!users) return <button onClick={fetchData}>불러오기</button>;

    return (
        <>
            <ul>
                {users.map(user => 
                    <li key={user.id} onClick={() => setUserId(user.id)}>
                        {user.username} ({user.name})
                    </li>
                )}
            </ul>
            <button onClick={fetchData}>다시 불러오기</button>
            { userId && <User2 id={userId} />}
        </>
    )
}

export default Users2;