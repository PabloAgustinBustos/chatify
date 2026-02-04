import React from 'react'
import AuthContainer from '../components/auth/AuthContainer'
import FormSection from '../components/auth/FormSection'
import FormHeader from '../components/auth/FormHeader'
import LoginForm from '../components/auth/LoginForm'
import PromoSection from '../components/auth/PromoSection'

const Login = () => {
  return (
    <div className='z-10 w-[1200px] flex items-center justify-center'>
      <AuthContainer>
        <FormSection>
          <FormHeader title='Welcome Back!' subtitle='Login to access your account' />

          <LoginForm/>
        </FormSection>

        <div className='divider divider-horizontal'></div>

        <PromoSection img='signup1.png' txt='Stay close to the people that matter' badges={['Familiar', 'Instant', 'Dynamic']}/>
      </AuthContainer>
    </div>
  )
}

export default Login