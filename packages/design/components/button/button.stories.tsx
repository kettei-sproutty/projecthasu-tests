import React from 'react'
import { Story } from '@storybook/react'

import Button from './button'
import type { ButtonProps } from './button'

const defaultProps: ButtonProps = {
  primary: true,
  children: 'Button',
  disabled: false,
  large: true,
  version: 'contained',
}

const Template = (args: ButtonProps) => {
  return <Button {...args} />
}

export const Primary = Template.bind({})
Primary.args = defaultProps

export default {
  title: 'Components/Button',
  component: Button,
}
