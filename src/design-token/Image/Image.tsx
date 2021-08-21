import clsx from 'clsx'
import React from 'react'

export interface ImageProps {
  src?: string
  className?: string
}

export const Image: React.FC<ImageProps & Record<string, any>> = ({
  src,
  className,
  ...props
}) => {
  return <img {...props} src={src} className={clsx('w-full', className)} />
}
