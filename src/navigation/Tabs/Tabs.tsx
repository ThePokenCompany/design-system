import clsx from 'clsx'
import React from 'react'
import { Tab, TabComponent } from './Tab'

export interface ITabsProps extends React.ComponentPropsWithoutRef<'div'> {}

export interface ITabsProperties {
  Tab: TabComponent
}

export type TabsComponent = React.FC<ITabsProps> & ITabsProperties

export const Tabs: TabsComponent = ({ className, children, ...props }) => {
  const [activeElement = null]: any[] = React.Children.toArray(children).filter(
    (el: any) => el.props.active,
  )
  return (
    <>
      <div className={clsx('', className)} {...props}>
        {children}
      </div>

      {activeElement?.props?.children}
    </>
  )
}

Tabs.Tab = Tab
