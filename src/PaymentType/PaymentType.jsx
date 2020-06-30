import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';

function PaymentType () {

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
                  
                   
                    <div className="pt-5">
        
                        <Link to="/payment">
                            <img src="/public/assets/images/main/2.png" alt="" width="100%"/>
                            </Link>
                      
                    </div>
                    <div>
        
                    <Link to="/payment">
                            <img src="/public/assets/images/main/3.png" alt="" width="100%"/>
                            </Link>
        
                      
                   </div>
                   <div>

                    <Link to="/payment">
                            <img src="/public/assets/images/main/4.png" alt="" width="100%"/>
                            </Link>
        
                      
                   </div>
                   <p>
                        <Link to="/">بازگشت</Link>
                    </p>
        
                </div>
                
            );
        }

export { PaymentType };