import { Box, BoxProps, Text } from '@aniltonjr-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando elemento box</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
