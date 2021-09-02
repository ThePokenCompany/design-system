import clsx from 'clsx'
import React from 'react'

export type ISeparatorProps = Omit<
  React.ComponentPropsWithoutRef<'span'>,
  'children'
>

export function Separator({ className, ...props }: ISeparatorProps) {
  return (
    <span className={clsx('w-full h-px bg-neutral-3', className)} {...props} />
  )
}
