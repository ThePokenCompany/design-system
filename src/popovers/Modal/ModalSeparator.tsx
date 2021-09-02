import clsx from 'clsx'
import React from 'react'
import { Separator } from '../../'
import { ISeparatorProps } from '../../layout'

export function ModalSeparator({ className, ...props }: ISeparatorProps) {
  return <Separator className={clsx('mb-4', className)} {...props} />
}
