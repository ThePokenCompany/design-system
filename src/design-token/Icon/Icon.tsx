import classNames from 'clsx'
import React from 'react'
import { ICONS } from './Icon.types'
import PropTypes from 'prop-types'

type IconProps = {
  name: ICONS
  className?: string
}

export const Icon: React.FC<IconProps & Record<string, any>> = ({
  name,
  className,
  ...props
}) => <i className={classNames('Icon', `Icon-${name}`, className)} {...props} />

Icon.propTypes = {
  name: PropTypes.oneOf(Object.values(ICONS) as ICONS[]).isRequired,
}
