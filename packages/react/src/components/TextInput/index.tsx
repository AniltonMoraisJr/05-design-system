import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { Prefix, TextInputContainer, Input } from './styles'

// import { Container } from './styles';

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ref, ...inputProps }) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...inputProps} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
