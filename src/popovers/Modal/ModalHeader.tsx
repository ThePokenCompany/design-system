import clsx from 'clsx'
import React from 'react'

export type IModalHeaderProps = React.ComponentPropsWithoutRef<'h3'>

export const ModalHeader: React.FC<IModalHeaderProps> = ({
  className,
  children,
  ...props
}: IModalHeaderProps) => (
  <h3
    className={clsx('text-xl text-neutral-8 font-medium mb-4 mr-10', className)}
    {...props}
  >
    {children}
  </h3>
)
