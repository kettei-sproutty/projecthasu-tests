import React from 'react'
import Component from './input'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Input',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => <Component {...args} />

export const Classic = Template.bind({})
Classic.args = { name: 'classic', label: 'Classic' }
