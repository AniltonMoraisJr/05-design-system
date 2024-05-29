import React, { ComponentProps } from 'react'
import { Prefix, TextInputContainer, Input } from './styles'

// import { Container } from './styles';

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput: React.FC<TextInputProps> = ({
  prefix,
  ...inputProps
}) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...inputProps} />
    </TextInputContainer>
  )
}
