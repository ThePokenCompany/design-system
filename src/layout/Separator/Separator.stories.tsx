import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { STORIES_GROUPS } from '../../utils/storiesGroups'
import { ISeparatorProps, Separator } from './Separator'

export default {
  title: `${STORIES_GROUPS.LAYOUT}/Separator`,
  component: Separator,
}

const Template: Story<ISeparatorProps> = ({ ...args }) => (
  <div className="w-full flex">
    <Separator {...args} />
  </div>
)

export const Demo = Template.bind({})
