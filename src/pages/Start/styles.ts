import { shade } from 'polished'
import styled, { css } from 'styled-components'

interface IEntryCardItemProps {
  color?: string
  background?: string
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #111111;

  img {
    width: 25rem;
  }
`

export const EntryCard = styled.div`
  padding: 50px;
  background: #373737;
  border-radius: 4px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const EntryCardItem = styled.div<IEntryCardItemProps>`
  width: 12.5rem;
  height: 14.4rem;
  padding: 10px;

  border-radius: 4px;
  cursor: pointer;
  color: #111111;
  margin: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}

  ${props =>
    props.background
      ? css`
          background: ${props.background};
          &:hover {
            background: ${shade(0.2, props.background)};
          }
        `
      : css`
          background: #00e676;
          &:hover {
            background: ${shade(0.2, '#00e676')};
          }
        `}

  span {
    font-weight: bold;
  }
`
