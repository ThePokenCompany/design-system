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
}

export enum BUTTON_SIZES {
  'small' = 'small',
  'medium' = 'medium',
}

enum TYPE_CLASS_NAMES {
  primary = `bg-primary border-primary text-black`,
  'primary-outlined' = `bg-black border-primary text-primary hover:bg-primary hover:text-black`,
  secondary = 'bg-neutral-2 border-neutral-3 text-neutral-6',
  'secondary-outlined' = 'bg-black border-neutral-3 text-neutral-3',
  'white' = `bg-white border-black text-black`,
  'white-outlined' = `bg-transparent border-white text-white`,
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

    const typeClasses = TYPE_CLASS_NAMES[outlined ? color + '-outlined' : color]

    const buttonClasses = clsx(
      disabled
        ? ['cursor-default bg-neutral-5 border-neutral-5 text-neutral-4']
        : typeClasses,
      size === BUTTON_SIZES.medium ? 'h-10' : 'h-9',
      customWidth || 'w-36',
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
      'cursor-pointer',
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
