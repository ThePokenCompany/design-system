import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { STORIES_GROUPS } from '../../utils/storiesGroups'
import { Tab, TabProps } from './Tab'
import { Tabs } from './Tabs'

export default {
  title: `${STORIES_GROUPS.NAVIGATION}/Tabs`,
  component: Tabs,
}

const Template: Story<TabProps<React.ElementType<'button'>>> = <
  C extends React.ElementType = 'button'
>(
  args: TabProps<C>,
) => <Tab {...args} />

export const ItemDemo = Template.bind({})

ItemDemo.args = {
  children: 'Tab item !',
  component: 'button',
  active: false,
}

export const Example = () => {
  const [active, setActive] = React.useState(1)

  return (
    <Tabs>
      {[...new Array(3)].map((_, index) => (
        <Tabs.Tab
          onClick={() => setActive(index + 1)}
          active={index + 1 === active}
        >
          Tab {index + 1}
        </Tabs.Tab>
      ))}
    </Tabs>
  )
}
