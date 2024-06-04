import { Box, Text, TextArea, TextAreaProps } from '@aniltonjr-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observation',
  },
}
export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
