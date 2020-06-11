import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userActions } from '../_actions';
import { useDispatch, useSelector } from 'react-redux';


function LoginPage() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => { 
        dispatch(userActions.logout()); 
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }


    return (
        
        <div className="col-lg-8 offset-lg-2 col-sm-12 bc border rounded ">
          
             <img className="ounded mx-auto d-block" src="/public/assets/images/logo.png" alt="logo" width="150px" height="150px"/>
            <h2 className="text-center hh">ورود</h2>
            
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>نام کاربری</label>
                    <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                        <div className="invalid-feedback">نام کاربری خود را وارد کنید</div>
                    }
                </div>
                <div className="form-group">
                    <label>کلمه عبور</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">لطفا کلمه عبور را وارد کنید</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        ورود
                    </button>
                    <Link to="/register" className="btn btn-link">ثبت نام</Link>
                    
                    
                </div>
            </form>
           
        </div>
    );
}

export { LoginPage };