import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { STORIES_GROUPS } from '../../utils/storiesGroups'
import { Button, ButtonProps, BUTTON_COLORS, BUTTON_SIZES } from './Button'

export default {
  title: `${STORIES_GROUPS.ACTIONS}/Button`,
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
  size: BUTTON_SIZES.medium,
  outlined: false,
  disabled: false,
  component: 'button',
}

export const Examples = () => {
  return (
    <div className="flex flex-col">
      {Object.keys(BUTTON_SIZES).map((size: BUTTON_SIZES) => (
        <div className="flex mb-4 w-full">
          <div className="mr-8 flex flex-col">
            {Object.keys(BUTTON_COLORS).map((color: BUTTON_COLORS) => (
              <Button
                size={size}
                key={color}
                className="mb-4 w-full"
                color={BUTTON_COLORS[color]}
                children={`${size} ${color}`}
              />
            ))}
          </div>

          <div className="mr-8">
            {Object.keys(BUTTON_COLORS).map((color: BUTTON_COLORS) => (
              <Button
                size={size}
                key={color}
                outlined
                className="mb-4 w-full"
                color={BUTTON_COLORS[color]}
                children={`${size} ${color} outlined`}
              />
            ))}
          </div>

          <div>
            {Object.keys(BUTTON_COLORS).map((color: BUTTON_COLORS) => (
              <Button
                size={size}
                key={color}
                disabled
                className="mb-4 w-full"
                color={BUTTON_COLORS[color]}
                children={`${size} ${color} disabled`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
