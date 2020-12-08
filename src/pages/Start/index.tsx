import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, EntryCard, EntryCardItem } from './styles'
import { FaCode, FaUsers } from 'react-icons/fa'

import Logo from '../../assets/logo.png'

const Start: React.FC = () => {
  const history = useHistory()

  const navigate = useCallback(
    (path: string) => {
      history.push(`${path}`)
    },
    [history]
  )

  return (
    <Container>
      <img src={Logo} alt="Project-manager-logo" />
      <EntryCard>
        <EntryCardItem onClick={() => navigate('signin/dev')}>
          <FaCode size={50} />
          <span>Entrer comme Dev</span>
        </EntryCardItem>
        <EntryCardItem
          color="#fff"
          background="#111111"
          onClick={() => navigate('signin/client')}
        >
          <FaUsers size={50} />
          <span>Entrer comme Client</span>
        </EntryCardItem>
      </EntryCard>
    </Container>
  )
}

export default Start
