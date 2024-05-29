import { TextInput, TextInputProps } from '@aniltonjr-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/TextInput',
  component: TextInput,
  args: {
    children: 'Example test',
  },
} as Meta

export const Primary: StoryObj<TextInputProps> = {}
export const CustomTag: StoryObj<TextInputProps> = {
  args: {
    children: 'Strong textInput',
    as: 'strong',
  },
}
