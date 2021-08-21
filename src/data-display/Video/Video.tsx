import clsx from 'clsx'
import React from 'react'

export interface VideoProps {
  src?: string
  className?: string
  isSFW: boolean
}

export const Video: React.FC<VideoProps & Record<string, any>> = ({
  src,
  className,
  isSFW = false,
  ...props
}) => {
  return isSFW ? (
    <video
      autoPlay
      loop
      playsInline
      className={clsx('rounded-md', className)}
      muted
      {...props}
    >
      <source src={src} type="video/mp4" />
    </video>
  ) : (
    <img src={src} className={className} alt="" {...props} />
  )
}
