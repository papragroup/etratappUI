import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

function HomePage() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }

    return (
        <div className="col-lg-8 col-sm-12 offset-lg-2 border rounded">
            {users.items &&
                <ul>
                    {users.items.map((user, index) =>
                        <li key={user.id}>
                            {user.firstName + ' ' + user.lastName}
                            {
                                user.deleting ? <em> - Deleting...</em>
                                : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                : <span> - <a onClick={() => handleDeleteUser(user.id)} className="text-primary">Delete</a></span>
                            }
                        </li>
                    )}
                </ul>
            }
           
            <div>
                <h2 className="text-center">پرداخت</h2>

              <img src="/public/assets/images/main/maintitle.png" alt="" width="100%"/>
            </div>
            <div>
            <h2 className="text-center">امور خیریه انجام شده</h2>
            <Link to="/register">
            <img src="/public/assets/images/main/maintitle.png" alt="" width="100%"/>
            </Link>
              
           </div>
           <p>
                <Link to="/login">Logout</Link>
            </p>
            

        </div>
    );
}

export { HomePage };