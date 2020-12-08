import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'

import { Container, Content, Form, FormActions } from './styles'
import logo from '../../assets/logo.png'
import IDevForm from '../../interfaces/IDevForm'
import api from '../../services/api'
import { store } from 'react-notifications-component'

const SignUpDev: React.FC = () => {
  const history = useHistory()
  const [model, setModel] = useState<IDevForm>({
    name: '',
    email: '',
    password: ''
  })

  const updateModel = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setModel({
        ...model,
        [e.target.name]: e.target.value
      })
    },
    [model]
  )

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      try {
        await api.post('/user', model)

        store.addNotification({
          title: 'Wonderful!',
          message: 'Operation succesful',
          type: 'success',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        })

        history.push('/signin/dev')
      } catch (err) {
        store.addNotification({
          title: 'Error!',
          message: 'Error register user',
          type: 'danger',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        })
      }
    },
    [model, history]
  )
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Créer compte </h1>
          <Input
            icon={FaUser}
            onChange={updateModel}
            type="text"
            placeholder="Nom"
            name="name"
            value={model.name}
          />
          <Input
            icon={FaEnvelope}
            type="email"
            placeholder="E-mail"
            name="email"
            value={model.email}
            onChange={updateModel}
          />
          <Input
            icon={FaLock}
            type="password"
            isPassword
            placeholder="Password"
            name="password"
            value={model.password}
            onChange={updateModel}
          />
          <Button type="submit">Valider</Button>
          <FormActions>
            <Link to="/signup/dev">Créez votre compte</Link>
            <Link to="/">Returner</Link>
          </FormActions>
        </Form>
      </Content>
      <img src={logo} alt="logo" />
    </Container>
  )
}

export default SignUpDev
