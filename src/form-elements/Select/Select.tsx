import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import React from 'react'
import { composeHandlers } from '../../utils/composeHandlers'
import { getDefaultValue } from './__internals/constants'

export type SelectValue = string | { [key: string]: string } | null

export interface ISelectProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  value: SelectValue
  options: SelectValue[]
  onChange: (el: SelectValue) => void
  placeholder: string
  label?: string
  disabled?: boolean
  // TODO: error?: string
  getOptionLabel?: (el: SelectValue) => string
}

export function Select({
  options,
  value,
  disabled = false,
  onChange,
  placeholder,
  label,
  //TODO: error,
  getOptionLabel = getDefaultValue,

  // Forwarded props.
  style,
  className,
  onBlur: onBlurProp,
  onFocus: onFocusProp,
  ...props
}: ISelectProps) {
  const nativeInputElement = React.useRef<HTMLInputElement>(null)
  const optionListElement = React.useRef(null)
  const wrapperElement = React.useRef(null)
  const arrowElement = React.useRef(null)
  const [focused, setFocused] = React.useState(false)
  const [preventOpen, setPreventOpen] = React.useState(true)

  const [searchValue, setSearchValue] = React.useState('')

  React.useEffect(() => {
    if (!focused) {
      setPreventOpen(true)
    }
  }, [focused])

  React.useEffect(() => {
    if (preventOpen) {
      setSearchValue('')
    }
  }, [preventOpen, setSearchValue])

  React.useEffect(() => {
    if (searchValue !== '') {
      setPreventOpen(false)
    }
  }, [searchValue])

  function onWrapperClick() {
    if (!disabled) {
      setPreventOpen(preventOpen => !preventOpen)
    }
  }

  function onForwardFocus() {
    if (!disabled) {
      nativeInputElement.current?.focus()
    }
  }

  function onNativeInputFocus() {
    if (!focused && !disabled) {
      setFocused(true)
    }
  }

  function onNativeInputBlur(event: React.FocusEvent) {
    const focusedElement = event.relatedTarget

    if (
      focusedElement !== wrapperElement.current &&
      focusedElement !== arrowElement.current &&
      (optionListElement.current == null ||
        focusedElement !== optionListElement.current)
    ) {
      setFocused(false)
    }
  }

  const onSelectItem = (option: SelectValue) => {
    setPreventOpen(true)
    onChange(option)
  }

  const nativeInputValue = value ? getOptionLabel(value) : ''
  const opened = focused && !preventOpen
  const textColor = !!value && !disabled ? 'text-neutral-5' : 'text-neutral-4'
  const ChevronIconComponent = opened ? ChevronUpIcon : ChevronDownIcon
  const cursor = disabled ? 'cursor-not-allowed' : 'cursor-pointer'

  return (
    <div
      className={clsx('relative w-full flex flex-col', className)}
      {...props}
    >
      {label && <label className="text-neutral-5 mb-2 text-xs">{label}</label>}

      <div
        ref={wrapperElement}
        onClick={onWrapperClick}
        onFocus={onForwardFocus}
        tabIndex={disabled ? undefined : -1}
        className={clsx(
          cursor,
          !disabled ? 'bg-black' : 'bg-neutral-1',
          `w-full border-2 rounded border-g h-10 p-2 outline-none flex`,
          (opened || !!value) && !disabled
            ? 'border-primary'
            : 'border-neutral-3',
        )}
      >
        <input
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
          className={clsx(
            'input-noSelection placeholder-neutral-4 flex w-full select-none flex-grow bg-transparent outline-none px-2',
            textColor,
            cursor,
          )}
          value={nativeInputValue}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={composeHandlers([onNativeInputFocus, onFocusProp])}
          onBlur={composeHandlers([onNativeInputBlur, onBlurProp])}
          ref={nativeInputElement}
          readOnly
        />

        {!disabled && (
          <button
            ref={arrowElement}
            className="flex items-center cursor-pointer ml-2"
            onFocus={onForwardFocus}
            tabIndex={-1}
            type="button"
          >
            <ChevronIconComponent className={clsx('w-6', textColor)} />
          </button>
        )}
      </div>

      {opened && (
        <ul
          tabIndex={-1}
          onFocus={onForwardFocus}
          ref={optionListElement}
          className="absolute cursor-pointer p-4 right-0 left-0 border-2 border-neutral-3 rounded border-g bg-neutral-2 flex flex-col -bottom-2 transform translate-y-full"
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => onSelectItem(option)}
              className="pl-4 h-12 text-neutral-8 rounded flex justify-start items-center hover:bg-neutral-3"
            >
              <span className="select-none">{getOptionLabel(option)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
