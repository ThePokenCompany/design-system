import clsx from 'clsx'
import React from 'react'

export enum BUTTON_COLORS {
  'primary' = 'primary',
  'secondary' = 'secondary',
  'white' = 'white',
}

enum TYPE_CLASS_NAMES {
  primary = `bg-primary border-primary text-black`,
  'primary-outlined' = `bg-black border-primary text-primary hover:bg-primary hover:text-black`,
  secondary = 'bg-neutral-2 border-neutral-3 text-neutral-6',
  'secondary-outlined' = 'bg-black border-neutral-3 text-neutral-3',
  'white' = `bg-white border-black text-black`,
  'white-outlined' = `bg-transparent border-white text-white`,
}

export interface ButtonProps {
  children: string
  color?: BUTTON_COLORS
  className?: string
  disabled?: boolean
  outlined?: boolean
}

export const Button: React.FC<ButtonProps & Record<string, any>> = ({
  color = BUTTON_COLORS.primary,
  disabled = false,
  outlined = false,
  className,
  children,
  ...props
}) => {
  const widthRegex = /\sw-[a-z0-9\/]+/g
  const customWidth = className?.match(widthRegex)?.length

  const typeClasses = TYPE_CLASS_NAMES[outlined ? color + '-outlined' : color]

  const buttonClasses = clsx(
    disabled
      ? ['cursor-default bg-neutral-5 border-neutral-5 text-neutral-4']
      : typeClasses,
    customWidth || 'w-36',
    'border',
    'font-medium',
    'animation',
    'duration-500',
    'flex',
    'justify-center',
    'h-10',
    'text-sm',
    'p-2',
    'px-4',
    'rounded',
    'outline-none',
    className,
  )

  return (
    <button disabled={disabled} className={buttonClasses} {...props}>
      <span className="truncate flex items-center">{children}</span>
    </button>
  )
}
