import React from 'react'
import { Fragment } from 'react'
import SignIn from '../components/Signin'
import ScrollToTop from '../components/ScrollToTop'


const SigninPage = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <SignIn />
    </Fragment>
  )
}

export default SigninPage