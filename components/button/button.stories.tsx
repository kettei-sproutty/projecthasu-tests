import React from 'react'
import Component from './button'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => <Component {...args} />

export const Primary = Template.bind({})
Primary.args = { theme: 'primary', children: 'Button' }
