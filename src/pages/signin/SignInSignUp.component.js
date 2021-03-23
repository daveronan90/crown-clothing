import React from "react";
import SignUp from "../../components/sign-up/SignUp.component";
import SignIn from "../../components/signin/SignIn.component";

import "./signinsignup.styles.scss";

const SignInSignUpPage = () => {
  return (
    <div className='sign-in-sign-up-page'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
