import clsx from 'clsx'
import React from 'react'
import { TabId } from '.'
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../types/globalTypes'

type defaultComponent = 'button'

interface Props {
  children: React.ReactNode
  active?: boolean
  id: TabId
  title: string
}

export type TabProps<
  C extends React.ElementType
> = PolymorphicComponentPropsWithRef<C, Props>

export type TabComponent = <C extends React.ElementType = defaultComponent>(
  props: TabProps<C>,
) => React.ReactElement | null

export const Tab: TabComponent = React.forwardRef(
  <C extends React.ElementType = defaultComponent>(
    {
      className,
      children,
      component,
      title,
      active = false,
      ...props
    }: TabProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = component || 'button'

    return (
      <Component
        {...props}
        className={clsx(
          className,
          'relative border-tab py-2 px-3',
          active ? 'text-neutral-8 border-tab-active' : 'text-neutral-5',
        )}
        ref={ref}
        children={title}
      />
    )
  },
)
