import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { SelectValue } from '.'
import { STORIES_GROUPS } from '../../utils/storiesGroups'
import { ISelectProps, Select } from './Select'
import { getDefaultValue } from './__internals/constants'

const OPTIONS = ['apple 🍎', 'orange 🍊', 'kiwi 🥝', 'banana 🍌']

export default {
  title: `${STORIES_GROUPS.FORM_ELEMENTS}/Select`,
  component: Select,
}

const Template: Story<ISelectProps> = args => <Select {...args} />

export const Demo = Template.bind({})

Demo.args = {
  value: 'orange 🍊',
  options: OPTIONS,
  getOptionValue: getDefaultValue,
  getOptionLabel: getDefaultValue,
  disabled: false,
  label: 'Demo fruits',
  placeholder: 'Select a fruit',
}

export const ExampleWithStrings = () => {
  const [value, setValue] = React.useState<SelectValue>('')

  return (
    <Select
      label="Example with strings"
      placeholder="Select a fruit"
      value={value}
      onChange={el => setValue(el)}
      options={['apple 🍎', 'orange 🍊', 'kiwi 🥝', 'banana 🍌']}
    />
  )
}

export const ExampleWithObjects = () => {
  const [value, setValue] = React.useState<SelectValue>(null)

  return (
    <div>
      <Select
        label="Example with objects"
        placeholder="Select a fruit"
        value={value}
        onChange={el => setValue(el)}
        getOptionLabel={(option: { name: string; value: string }) =>
          option.name
        }
        options={[
          { name: 'apple 🍎', value: 'apl' },
          { name: 'orange 🍊', value: 'org' },
          { name: 'kiwi 🥝', value: 'kiwi' },
          { name: 'banana 🍌', value: 'bna' },
        ]}
      />

      <p className="text-primary mt-5">
        selected value : {JSON.stringify(value)}
      </p>
    </div>
  )
}
