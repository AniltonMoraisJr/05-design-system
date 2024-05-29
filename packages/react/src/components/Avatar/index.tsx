import React, { ComponentProps } from 'react'
import { User } from '@phosphor-icons/react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

// import { Container } from './styles';

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
