import {
  MultiStepContainer,
  MultiStepLabel,
  MultiStepSteps,
  MultiStepStepsStep,
} from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}
export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <MultiStepLabel>{`Passo ${currentStep} de ${size}`}</MultiStepLabel>
      <MultiStepSteps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <MultiStepStepsStep key={step} active={currentStep >= step} />
        })}
      </MultiStepSteps>
    </MultiStepContainer>
  )
}
