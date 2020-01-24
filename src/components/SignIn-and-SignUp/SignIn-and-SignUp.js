import React from 'react';

import './SignIn-and-SignUp.scss';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
const SignInandSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInandSignUp;