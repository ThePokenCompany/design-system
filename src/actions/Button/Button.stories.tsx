import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { STORIES_GROUPS } from '../../utils/storiesGroups'
import { Button, ButtonProps, BUTTON_COLORS } from './Button'

export default {
  title: `${STORIES_GROUPS.actions}/Button`,
  component: Button,
}

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Demo = Template.bind({})

Demo.args = {
  children: 'Button',
  color: BUTTON_COLORS.primary,
  outlined: false,
  disabled: false,
}

export const Examples = () => {
  return (
    <div className="flex">
      <div className="mr-8">
        {Object.keys(BUTTON_COLORS).map((color: BUTTON_COLORS) => (
          <Button
            className="mb-4"
            color={BUTTON_COLORS[color]}
            children={color}
          />
        ))}
      </div>

      <div className="mr-8">
        {Object.keys(BUTTON_COLORS).map((color: BUTTON_COLORS) => (
          <Button
            outlined
            className="mb-4 w-full"
            color={BUTTON_COLORS[color]}
            children={`${color} outlined`}
          />
        ))}
      </div>

      <div>
        {Object.keys(BUTTON_COLORS).map((color: BUTTON_COLORS) => (
          <Button
            disabled
            className="mb-4 w-full"
            color={BUTTON_COLORS[color]}
            children={`${color} disabled`}
          />
        ))}
      </div>
    </div>
  )
}
