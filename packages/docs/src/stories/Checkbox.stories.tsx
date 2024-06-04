import { Box, Text, CheckBox, CheckBoxProps } from '@aniltonjr-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta

export const Primary: StoryObj<CheckBoxProps> = {}
export const Disabled: StoryObj<CheckBoxProps> = {
  args: {
    disabled: true,
  },
}
