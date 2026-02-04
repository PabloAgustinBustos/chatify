import React, { useState } from 'react'
import useAuthStore from '../store/useAuthStore'
import { MessageCircleIcon, UserIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import AuthContainer from '../components/auth/AuthContainer'
import FormSection from '../components/auth/FormSection'
import FormHeader from '../components/auth/FormHeader'
import SignupForm from '../components/auth/SignupForm'
import PromoSection from '../components/auth/PromoSection'

const SignUp = () => {
  return (
    <div className='z-10 w-[1200px] flex items-center justify-center'>
      <AuthContainer>
        <FormSection>
          <FormHeader title='Create Account' subtitle='Fill out the form to get started' />

          <SignupForm/>
        </FormSection>

        <div className='divider divider-horizontal'></div>

        <PromoSection img='signup2.png' txt='The beginning of something powerful' badges={['Free', 'Easy to use', 'Fun']}/>
      </AuthContainer>
    </div>
  )
}

export default SignUp