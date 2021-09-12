import clsx from 'clsx'
import React from 'react'
import { Tab, TabComponent } from './Tab'

export interface ITabsProps extends React.ComponentPropsWithoutRef<'div'> {}

export interface ITabsProperties {
  Tab: TabComponent
}

export type TabsComponent = React.FC<ITabsProps> & ITabsProperties

export const Tabs: TabsComponent = ({ className, ...props }) => {
  return <div className={clsx('', className)} {...props} />
}

Tabs.Tab = Tab
