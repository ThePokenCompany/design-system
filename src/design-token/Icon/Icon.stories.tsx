import React from 'react'
import { knobIcon } from '../../../.storybook/knobs'
import { Icon } from './Icon'

export default {
  title: 'Design tokens/Icon',
  component: Icon,
}

export const Demo = () => {
  return <Icon style={{ fontSize: 48 }} name={knobIcon('name', 'react')} />
}
