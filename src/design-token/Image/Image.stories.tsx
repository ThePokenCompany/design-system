import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { Image, ImageProps } from './Image'

export default {
  title: 'Design tokens/Image',
  component: Image,
}

const Template: Story<ImageProps> = args => <Image {...args} />

export const Demo = Template.bind({})

Demo.args = {
  src: 'https://picsum.photos/200',
}
