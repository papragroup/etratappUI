import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';

function Dashboard () {

       // const users = useSelector(state => state.users);
    // const user = useSelector(state => state.authentication.user);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(userActions.getAll());
    // }, []);

    // function handleDeleteUser(id) {
    //     dispatch(userActions.delete(id));
    // }
    
            return (

                <div className="col-lg-8 col-sm-12 bc offset-lg-2 border rounded">
                  
                   
                    <div>
                        <h2 className="text-center hh">پرداخت</h2>
        
                        <Link to="/payment">
                            <img src="/public/assets/images/main/maintitle.png" alt="" width="100%"/>
                            </Link>
                      
                    </div>
                    <div>
                    <h2 className="text-center">امور خیریه انجام شده</h2>
        
                    <img src="/public/assets/images/main/maintitle.png" alt="" width="100%"/>
        
                      
                   </div>
                   <p>
                        <Link to="/login">خروج</Link>
                    </p>
        
                </div>
                
            );
        }

export { Dashboard };