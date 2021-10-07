import clsx from 'clsx'
import React from 'react'
import { Tab, TabComponent } from './Tab'

export type TabId = string | number
export interface ITabsProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  defaultActiveId?: TabId
  activeId?: TabId
  onChange?: (id: TabId) => void
}

export interface ITabsProperties {
  Tab: TabComponent
}

export type TabsComponent = React.FC<ITabsProps> & ITabsProperties

export const Tabs: TabsComponent = ({
  className,
  children,
  defaultActiveId,
  activeId: activeIdProp,
  onChange,
  ...props
}) => {
  const [localActiveId, setLocalActiveId] = React.useState<
    TabId | null | undefined
    //support id = 0
  >(defaultActiveId !== (null || undefined) ? defaultActiveId : activeIdProp)

  const activeId = activeIdProp || localActiveId

  const [activeContent]: any[] = React.Children.toArray(children).filter(
    (el: any) => el.props.id === activeId,
  )

  function onChangeId(id: TabId) {
    setLocalActiveId(id)
    typeof onChange === 'function' && onChange(id)
  }

  return (
    <>
      <div className={clsx('', className)} {...props}>
        {React.Children.toArray(children).map(
          (tab: React.DetailedReactHTMLElement<any, HTMLElement>) =>
            React.cloneElement(tab, {
              onClick: () => onChangeId(tab.props.id),
              active: activeId === tab.props.id,
            }),
        )}
      </div>

      {activeContent?.props?.children}
    </>
  )
}

Tabs.Tab = Tab
