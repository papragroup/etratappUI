import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { userActions } from '../_actions';
// import { useDispatch, useSelector } from 'react-redux';


function PaymentPage() {

    // const [inputs, setInputs] = useState({
    //     Amount: '',

    // });

    // const [submitted, setSubmitted] = useState(false);
    // const { Amount } = inputs;
    // const loggingIn = useSelector(state => state.authentication.loggingIn);
    // const dispatch = useDispatch();

    // useEffect(() => { 
    //     dispatch(userActions.logout()); 
    // }, []);

    // function handleChange(e) {
    //     const { name, value } = e.target;
    //     setInputs(inputs => ({ ...inputs, [name]: value }));
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     setSubmitted(true);
    //     if (Amount) {
    //         dispatch(userActions.login(Amount));
    //     }
    // }

    function onClick(value) {
        document.getElementById("count").value = value;
    }


    return (


        <div className="col-lg-8 offset-lg-2 bc col-sm-12 bc border rounded ">

            <img className="ounded mx-auto d-block" src="/public/assets/images/logo.png" alt="logo" width="150px" height="150px" />
            <h2 className="text-center hh">پرداخت</h2>

            <form name="form" id='samanpeyment' action='https://sep.shaparak.ir/payment.aspx' method='post'>
                <div className="form-group">
                    <label>(ریال) انتخاب مبلغ</label>
                    <input type="text" id="count" name="Amount" placeholder="مبلغ دلخواه" className={'form-control'} required />
                    <input type='hidden' name='ResNum' value='1' />
                    <input type='hidden' name='RedirectURL' value='http://localhost:8090/customers' />
                    <input type='hidden' name='MID' value='12130598' />
                    {/* {submitted && !Amount &&
                        <div className="invalid-feedback">لطفا مبلغ مورد نظر را وارد نمایید</div>
                    } */}
                </div>

                <input className="btn btn-success m-1" type="button" onClick={() => onClick("10000")} value="10000" />
                <input className="btn btn-success m-1" type="button" onClick={() => onClick("20000")} value="20000" />
                <input className="btn btn-success m-1" type="button" onClick={() => onClick("30000")} value="30000" />
                <input className="btn btn-success m-1" type="button" onClick={() => onClick("40000")} value="40000" />
                <input className="btn btn-success m-1" type="button" onClick={() => onClick("50000")} value="50000" />
                <input className="btn btn-success m-1" type="button" onClick={() => onClick("60000")} value="60000" />


                <div className="form-group">
                    <button className="btn btn-primary mt-3">
                        {/* {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
                        پرداخت
                    </button>

                </div>
                <Link to="/paymenttype">بازگشت</Link>

            </form>


        </div>





    );
}

export { PaymentPage };