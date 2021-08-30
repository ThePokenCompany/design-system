import clsx from 'clsx'
import React from 'react'

export type IModalSeparatorProps = React.ComponentPropsWithoutRef<'span'>

export const ModalSeparator: React.FC<IModalSeparatorProps> = ({
  className,
  children,
  ...props
}: IModalSeparatorProps) => (
  <span
    className={clsx('w-full mb-4 h-px bg-neutral-3', className)}
    {...props}
  />
)
