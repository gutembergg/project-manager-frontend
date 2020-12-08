import React from 'react'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { Container, Content, Form, FormActions } from './styles'
import logo from '../../assets/logo.png'

import { FaCode } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SignInClient: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <Content>
        <Form>
          <h1>Login comme client</h1>
          <Input icon={FaCode} placeholder="Code" />

          <Button>Entrer</Button>
          <FormActions>
            <Link to="/">Returner</Link>
          </FormActions>
        </Form>
      </Content>
    </Container>
  )
}

export default SignInClient
