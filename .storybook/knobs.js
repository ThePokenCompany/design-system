import { select } from '@storybook/addon-knobs'
import { ICONS } from '../src/design-token/Icon/Icon.types'

export const NONE_OPTION = 'none'

const OPTIONS = Object.values(ICONS).filter(value => typeof value === 'string')

export function knobOptionalSelect(
  label,
  options,
  defaultValue = NONE_OPTION,
  groupID,
) {
  const value = select(label, [NONE_OPTION, ...options], defaultValue, groupID)
  return value === NONE_OPTION ? undefined : value
}

export function knobIcon(label, defaultValue, groupID) {
  return knobOptionalSelect(label, OPTIONS, defaultValue, groupID)
}
