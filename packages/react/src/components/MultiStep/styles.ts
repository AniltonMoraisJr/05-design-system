import { styled } from '../../styles'
import { Text } from '../Text'

export const MultiStepContainer = styled('div', {})
export const MultiStepLabel = styled(Text, {
  color: '$gray200',
  defaultVariants: {
    fontSize: '$xs',
  },
})
export const MultiStepSteps = styled('div', {
  display: 'grid',
  gap: '$2',
  marginTop: '$1',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
})
export const MultiStepStepsStep = styled('div', {
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$gray600',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray100',
      },
    },
  },
})
