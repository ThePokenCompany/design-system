import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { STORIES_GROUPS } from '../../utils/storiesGroups'
import { Video, VideoProps } from './Video'

export default {
  title: `${STORIES_GROUPS.dataDisplay}/Video`,
  component: Video,
}

const Template: Story<VideoProps> = args => <Video {...args} />

export const Demo = Template.bind({})

Demo.args = {
  src:
    'https://ak.picdn.net/shutterstock/videos/1044255715/preview/stock-footage-person-signing-important-document-camera-following-tip-of-the-pen-as-it-signs-crucial-business.webm',
}
