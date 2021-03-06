import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';




import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { LoginPage } from '../LoginPage';
import { Dashboard } from '../Dashboard';
import { PaymentPage } from '../PaymentPage';
import { RegisterPage } from '../RegisterPage';
import { PaymentType} from '../PaymentType';
function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
            <div className="container">
                <div className="col-md-8 offset-md-2 pt-5">
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>
                        <Switch>                            
                            <PrivateRoute exact path="/" component={Dashboard}/>
                            <PrivateRoute exact path="/paymenttype" component={PaymentType}/>
                            <PrivateRoute exact path="/payment" component={PaymentPage}/>
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
                </div>
            </div>

    );
}

export { App };