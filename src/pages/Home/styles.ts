import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  font-size: 1.125rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  color: ${({ theme }) => theme['gray-100']};
  font-weight: bold;
`

const BaseInput = styled.input`
  height: 2.5rem;
  padding: 0 0.5rem;
  font-size: 1.125rem;

  background: transparent;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
  font-weight: bold;
  color: ${({ theme }) => theme['gray-100']};

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['green-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const CountdownContainer = styled.div`
  font-size: 10rem;
  line-height: 8rem;

  display: flex;
  gap: 1rem;

  font-family: 'Roboto Mono', monospace;
  color: ${({ theme }) => theme['gray-100']};

  span {
    padding: 2rem 1rem;

    background: ${({ theme }) => theme['gray-700']};
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  width: 4rem;
  padding: 2rem 0;

  display: flex;
  justify-content: center;

  color: ${({ theme }) => theme['green-500']};
  overflow: hidden;
`

export const StartCountdownButton = styled.button`
  width: 100%;
  padding: 1rem;
  gap: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme['gray-100']};
  transition: background 0.2s;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
