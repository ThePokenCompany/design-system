import clsx from 'clsx'
import React from 'react'
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../types/globalTypes'

type defaultComponent = 'button'

export enum BUTTON_COLORS {
  'primary' = 'primary',
  'secondary' = 'secondary',
  'white' = 'white',
  'yellow' = 'yellow',
  'green' = 'green',
  'orange' = 'orange',
  'red' = 'red',
}

export enum BUTTON_SIZES {
  'small' = 'small',
  'medium' = 'medium',
}

enum TYPE_CLASS_NAMES {
  primary = `bg-primary border-primary text-black`,
  'primary-outlined' = ` border-primary text-primary hover:bg-primary hover:text-black`,
  secondary = 'bg-neutral-2 border-neutral-3 text-neutral-6',
  'secondary-outlined' = ' border-neutral-3 text-neutral-3',
  'white' = `bg-white border-black text-black`,
  'white-outlined' = `border-white text-white`,
  'green' = `bg-green border-black text-black`,
  'green-outlined' = ` border-green text-green`,
  'red' = `bg-red border-black text-black`,
  'red-outlined' = ` border-red text-red`,
  'orange' = `bg-orange border-black text-black`,
  'orange-outlined' = ` border-orange text-orange`,
  'yellow' = `bg-yellow border-black text-black`,
  'yellow-outlined' = ` border-unlockable text-neutral-6`,
}

interface Props {
  children: React.ReactNode
  color?: BUTTON_COLORS
  disabled?: boolean
  outlined?: boolean
  size?: BUTTON_SIZES
}

export type ButtonProps<
  C extends React.ElementType
> = PolymorphicComponentPropsWithRef<C, Props>

type ButtonComponent = <C extends React.ElementType = defaultComponent>(
  props: ButtonProps<C>,
) => React.ReactElement | null

export const Button: ButtonComponent = React.forwardRef(
  <C extends React.ElementType = defaultComponent>(
    {
      color = BUTTON_COLORS.primary,
      size = BUTTON_SIZES.medium,
      disabled = false,
      outlined = false,
      className,
      children,
      component,
      href,
      ...props
    }: ButtonProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = component || 'button'

    const widthRegex = /\sw-[a-z0-9\/]+/g
    const customWidth = className?.match(widthRegex)?.length

    const heightRegex = /\sh-[a-z0-9\/]+/g
    const customHeight = className?.match(heightRegex)?.length

    const typeClasses = TYPE_CLASS_NAMES[outlined ? color + '-outlined' : color]

    const buttonClasses = clsx(
      disabled
        ? ['cursor-not-allowed bg-neutral-5 border-neutral-5 text-neutral-4']
        : ['cursor-pointer', typeClasses],
      customWidth || 'w-36',
      customHeight || (size === BUTTON_SIZES.medium ? 'h-10' : 'h-9'),
      'border',
      'font-medium',
      'animation',
      'duration-500',
      'flex',
      'justify-center',
      'text-sm',
      'px-4',
      'rounded',
      'outline-none',
      'select-none',
      'flex',
      'items-center',
      className,
    )

    const isLink = Component === 'a'

    const disabledProp = isLink ? {} : { disabled }
    const hrefProp = isLink ? (disabled ? {} : { href }) : {}

    return (
      <Component
        className={buttonClasses}
        {...disabledProp}
        {...hrefProp}
        {...props}
        ref={ref}
      >
        <span className="truncate flex items-center">{children}</span>
      </Component>
    )
  },
)
