import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { STORIES_GROUPS } from '../../utils/storiesGroups'
import { Button, ButtonProps, BUTTON_COLORS } from './Button'

export default {
  title: `${STORIES_GROUPS.actions}/Button`,
  component: Button,
}

const Template: Story<ButtonProps<React.ElementType<'button'>>> = <
  C extends React.ElementType = 'button'
>(
  args: ButtonProps<C>,
) => <Button {...args} />

export const Demo = Template.bind({})

Demo.args = {
  children: 'Button',
  color: BUTTON_COLORS.primary,
  outlined: false,
  disabled: false,
  component: 'button',
}

export const Examples = () => {
  return (
    <div className="flex">
      <div className="mr-8">
        {Object.keys(BUTTON_COLORS).map((color: BUTTON_COLORS) => (
          <Button
            key={color}
            className="mb-4"
            color={BUTTON_COLORS[color]}
            children={color}
          />
        ))}
      </div>

      <div className="mr-8">
        {Object.keys(BUTTON_COLORS).map((color: BUTTON_COLORS) => (
          <Button
            key={color}
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
            key={color}
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
