import {put,takeEvery,all,call, takeLatest} from 'redux-saga/effects';
import actions from '../actions/action-constants';

const getProducts = () => {
    return fetch('http://localhost:4000/api/user/get-products')
        .then(response => ({response}))
        .catch(error => ({error}))
}

const LoginValidation = (data) => {

    const userData = {
        username:data.email,
        password:data.password
    }

    return fetch('http://localhost:4000/api/user/user-login',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(userData)
    })
    .then(async res =>
        {
            res = await res.json();
            return res;
        })
    .catch(error => {
        console.log(error)
    })
}

const SignUp = (data) => {

    const user = {
        name : data.name,
        username : data.username,
        email : data.email,
        password : data.password
    }

    return fetch('http://localhost:4000/api/user/signup',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(user)
    })
    .then(async res =>
        {
            res = await res.json();
            return res;
        })
    .catch(error => {
        console.log(error)
    })
}

const AdminLogin = (data) => {
    const user = {
        username : data.username,
        password : data.password
    }

    return fetch('http://localhost:4000/api/admin/login',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(user)
    })
    .then(async res =>
        {
            res = await res.json();
            return res;
        })
    .catch(error => {
        console.log(error)
    })
}

function* getProductsSaga(){

    const {response,error} = yield call(getProducts);

    if(response)
    {
        const data = yield response.json();
        yield put({type:actions.HOME_PRODUCTS_FETCH,payload:data.products});
    }
    else
    {
        console.log(error);
    }
}

function* handleloginStart(action){

    try{ 
        const res = yield call(LoginValidation,action.payload);
        
        if(res.success)
        {
            yield put({type:actions.LOGIN_SUCCESS,payload:res.user});
        }
        else
        {
            return put({type:actions.LOGIN_FAILED,payload:res})
        }
    }
    catch(err){
        console.log(err);
    }
}

function* handleLogOut(){
    try
    {
        yield put({type : actions.LOGOUT_SUCCESS});
    }
    catch(err)
    {
        console.log("LOGOUT SAGA ERROR : ",err.message);
    }
}

function* handleSignUp(action){

    try{ 
        const res = yield call(SignUp,action.payload);

        console.log("signup response",res);
        
        if(res.success)
        {
            yield put({type:actions.SIGNUP_SUCCESS,payload:res.user});
        }
        else
        {
            yield put({type:actions.SIGNUP_FAILED,payload:res})
        }
    }
    catch(err){
        console.log(err);
    }

}

function* handleAdminLogin(action)
{
    try{ 
        const res = yield call(AdminLogin,action.payload);

        console.log("admin login response",res);
        
        if(res.success)
        {
            yield put({type:actions.ADMIN_LOGIN_SUCCESS,payload:res});
        }
        else
        {
            yield put({type:actions.ADMIN_LOGIN_FAILED,payload:res})
        }
    }
    catch(err){
        console.log(err);
    }
}

function* handleAdminLogOut(){

    try
    {
        yield put({type : actions.ADMIN_LOGOUT_SUCCESS});
    }
    catch(err)
    {
        console.log("LOGOUT SAGA ERROR : ",err.message);
        yield put({type:actions.ADMIN_LOGOUT_FAILED});
    }
}

function* watchForLoginStart(){
    yield takeLatest(actions.LOGIN_START,handleloginStart);
}

function* watchForLogOutStart(){
    yield takeLatest(actions.LOGOUT_START,handleLogOut);
}

function* watchForSignUpStart(){
    yield takeLatest(actions.SIGNUP_START,handleSignUp);
}

function* watchForAdminLoginStart(){
    yield takeLatest(actions.ADMIN_LOGIN_START,handleAdminLogin);
}

function* watchForAdminLogOut(){
    yield takeLatest(actions.ADMIN_LOGOUT_START,handleAdminLogOut);
}

export default function* rootSaga()
{
    yield all(
        [
            getProductsSaga(),
            watchForLoginStart(),
            watchForLogOutStart(),
            watchForSignUpStart(),
            watchForAdminLoginStart(),
            watchForAdminLogOut()
    ]);
}