import clsx from 'clsx'
import React from 'react'

export type IModalBodyProps = React.ComponentPropsWithoutRef<'div'>

export const ModalBody: React.FC<IModalBodyProps> = ({
  className,
  children,
  ...props
}: IModalBodyProps) => (
  <h3 className={clsx('text-neutral-8 mb-4', className)} {...props}>
    {children}
  </h3>
)
