import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { TabId } from '.'
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
  children: 'Tab content !',
  title: 'Tab item !',
  component: 'button',
  active: false,
}

export const ExampleUncontrolled = () => {
  return (
    <Tabs defaultActiveId={0}>
      {[...new Array(3)].map((_, index) => (
        <Tabs.Tab key={index} id={index} title={`Tab ${index + 1}`}>
          <div style={{ color: '#FFF', marginTop: 24 }}>
            <h4>Content {index + 1}</h4>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              omnis harum autem, beatae adipisci et, temporibus nemo quibusdam
              perferendis doloribus voluptate non cumque molestias, nobis
              recusandae nisi aliquam earum provident?
            </p>
          </div>
        </Tabs.Tab>
      ))}
    </Tabs>
  )
}

export const ExampleControlled = () => {
  const [active, setActive] = React.useState<TabId>(0)

  return (
    <Tabs activeId={active} onChange={(id: TabId) => setActive(id)}>
      {[...new Array(3)].map((_, index) => (
        <Tabs.Tab key={index} id={index} title={`Tab ${index + 1}`}>
          <div style={{ color: '#FFF', marginTop: 24 }}>
            <h4>Content {index + 1}</h4>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              omnis harum autem, beatae adipisci et, temporibus nemo quibusdam
              perferendis doloribus voluptate non cumque molestias, nobis
              recusandae nisi aliquam earum provident?
            </p>
          </div>
        </Tabs.Tab>
      ))}
    </Tabs>
  )
}
