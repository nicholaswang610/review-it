import axios from "axios";

const signup = (userObject) => {
    return (dispatch) => {
        if(!userObject.email || !userObject.password || !userObject.firstName || !userObject.lastName || !userObject.passwordConfirm){
            dispatch({type: "SIGNUP_FAIL", error: "Missing one or more fields"});
        }
        else if(userObject.password.length < 6){
            dispatch({type: "SIGNUP_FAIL", error: "Password must be at least 6 characters"});
        }
        else if(userObject.password !== userObject.passwordConfirm){
            dispatch({type: "SIGNUP_FAIL", error: "Passwords do not match"});
        }
        else{
            axios.post('http://localhost:5000/signup', {
                email: userObject.email,
                password: userObject.password,
                firstName: userObject.firstName,
                lastName: userObject.lastName
            }).then(response=>{
                if(response.data.error){
                    dispatch({type: "SIGNUP_FAIL", error: response.data.msg});
                }
                else{
                    dispatch({type: "SIGNUP_SUCCESS", msg: response.data.msg});
                }
            });
        }
    }
}

export {signup};