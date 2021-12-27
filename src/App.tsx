import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { useStore } from './store/context'
import { FilterIcon } from './components/filter-icon'
import { CopyButton } from './components/copy-button'

export const App: React.FC = observer(() => {
  const store = useStore()
  const [userValue, setUserValue] = useState<string>('')

  return (
    <>
      <GlobalStyles />
      <Container>
        <TextareaBlock>
          <Textarea
            placeholder='Введите текст'
            value={userValue}
            onChange={(e) => setUserValue(e.target.value)}
          />
        </TextareaBlock>
        <Button onClick={() => store.setInput(userValue)}>
          <FilterIcon />
        </Button>
        <OutputBlock>
          <TextareaBlock>
            <TextareaHeader>
              <TextareaTitle>Без лишних дублей</TextareaTitle>
              <CopyButton text={store.withOneDouble} />
            </TextareaHeader>
            <Textarea defaultValue={store.withOneDouble} />
          </TextareaBlock>
          <TextareaBlock>
            <TextareaHeader>
              <TextareaTitle>Вообще без дублей</TextareaTitle>
              <CopyButton text={store.withNoDoubles} />
            </TextareaHeader>
            <Textarea defaultValue={store.withNoDoubles} />
          </TextareaBlock>
        </OutputBlock>
      </Container>
    </>
  )
})

const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
  }
  button {
    border: none;
    :hover {
    cursor: pointer;
  }
  }

`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`
const Button = styled.button`
  width: 340px;
  padding: 10px;
  background-color: #ffdcc8;
  border-radius: 10px;
  margin: 17px 0;
  svg {
    width: 32px;
    height: 32px;
  }
`
const OutputBlock = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
`
const TextareaBlock = styled.div``
const TextareaHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
const TextareaTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin: 0 0 7px 0;
`
const Textarea = styled.textarea`
  width: 500px;
  height: 310px;
  font-size: 24px;
  border: 1px solid #000000;
  padding: 5px;
  resize: none;
  outline: none;
`
