import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'

import { Container, Content, Form, FormActions } from './styles'
import logo from '../../assets/logo.png'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth'
import ICredentialsDev from '../../interfaces/ICredentialsDev'
import { store } from 'react-notifications-component'

const SignInDev: React.FC = () => {
  const { user, signInDev } = useContext(AuthContext)

  const [model, setModel] = useState<ICredentialsDev>({
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
        await signInDev(model)
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
      } catch (error) {
        store.addNotification({
          title: 'Error!',
          message: 'error register',
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
    [model, signInDev]
  )

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Login comme Dev</h1>
          <Input
            icon={FaEnvelope}
            type="email"
            name="email"
            value={model.email}
            onChange={updateModel}
            placeholder="E-mail"
          />
          <Input
            icon={FaLock}
            type="password"
            name="password"
            isPassword
            value={model.password}
            onChange={updateModel}
            placeholder="Password"
          />
          <Button type="submit">Entrer</Button>
          <FormActions>
            <Link to="/signup/dev">Créez votre compte</Link>
            <Link to="/">Returner</Link>
          </FormActions>
        </Form>
      </Content>
      <img src={logo} alt="Logo" />
    </Container>
  )
}

export default SignInDev
