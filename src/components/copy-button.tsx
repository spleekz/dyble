import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DoneIcon } from './done-icon'
import { CopyIcon } from './copy-icon'

interface CopyButtonProps {
  text: string
}

const StyledCopyButton = styled.button`
  background-color: #ffffff;
  &:hover {
    cursor: pointer;
  }
  svg {
    width: 32px;
    height: 32px;
    transition: all 0.26s;
  }
`

export const CopyButton: React.FC<CopyButtonProps> = ({ text }): JSX.Element => {
  const [fillColor, setFillColor] = useState<string>('#000000')
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const copyPhrase = (): void => {
    navigator.clipboard.writeText(text)
    setIsCopied(true)
  }
  useEffect(() => {
    if (isCopied) {
      setFillColor('#000000')
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    }
  }, [isCopied])

  return (
    <StyledCopyButton
      onClick={copyPhrase}
      disabled={isCopied}
      onMouseEnter={() => setFillColor('#ffa673')}
      onMouseLeave={() => setFillColor('#000000')}
    >
      {isCopied ? <DoneIcon /> : <CopyIcon fillColor={fillColor} />}
    </StyledCopyButton>
  )
}
