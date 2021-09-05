import { VideoCameraIcon } from '@heroicons/react/outline'
import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { STORIES_GROUPS } from '../../utils/storiesGroups'
import { Dropzone, DropzoneProps } from './Dropzone'

export default {
  title: `${STORIES_GROUPS.FORM_ELEMENTS}/Dropzone`,
  component: Dropzone,
}

const Template: Story<DropzoneProps> = args => <Dropzone {...args} />

export const Demo = Template.bind({})

Demo.args = {
  label: 'PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.',
  disabled: false,
  multiple: false,
  accept: 'image/*,.png,.gif,.webp,.mp4,.mp3',
}

export const CustomIcom = Template.bind({})

CustomIcom.args = {
  ...Demo.args,
  icon: VideoCameraIcon,
}
