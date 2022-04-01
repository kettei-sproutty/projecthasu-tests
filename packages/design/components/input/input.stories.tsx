import React from 'react'
import Component from './input'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Input',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => <Component {...args} />

export const Simple = Template.bind({})
Simple.args = { name: 'field', label: 'Simple' }

export const Error = Template.bind({})
Error.args = { name: 'field', label: 'Error', error: { type: 'required', message: 'This field is required' } }
