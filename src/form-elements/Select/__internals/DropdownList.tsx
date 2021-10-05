import React from 'react'
import { SelectValue } from '..'
import { usePopper } from '../../../utils/usePopper'

export interface IDropDownListProps
  extends React.ComponentPropsWithoutRef<'ul'> {
  options: SelectValue[]
  referenceElement: any
  onSelectOption: (option: SelectValue) => void
  getOptionLabel: (option: SelectValue) => string
}

export type DropDownListComponent = React.FC<IDropDownListProps>

export const DropDownList = React.forwardRef(
  (
    {
      onFocus,
      options,
      onSelectOption,
      getOptionLabel,
      referenceElement,
    }: IDropDownListProps,
    ref: any,
  ) => {
    const mountingPoint = React.useMemo(() => document.createElement('div'), [])

    React.useLayoutEffect(() => {
      if (ref?.current != null) {
        const referenceRect = referenceElement.current.getBoundingClientRect()
        ref.current.style.minWidth = `${referenceRect.width}px`
      }
    })

    const { style: popperStyle, scheduleUpdate, placement } = usePopper(
      referenceElement,
      ref,
    )

    React.useLayoutEffect(() => {
      document.body.appendChild(mountingPoint)
      return () => {
        document.body.removeChild(mountingPoint)
      }
    }, [mountingPoint])

    // Make sure the item list (popover) is always correctly positioned.
    React.useLayoutEffect(() => {
      scheduleUpdate()
    })

    return (
      <ul
        tabIndex={-1}
        onFocus={onFocus}
        ref={ref}
        style={popperStyle}
        data-placement={placement}
        className="cursor-pointer p-4 border-2 border-neutral-3 rounded border-g bg-neutral-2 flex flex-col"
      >
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => onSelectOption(option)}
            className="pl-4 h-12 text-neutral-8 rounded flex justify-start items-center hover:bg-neutral-3"
          >
            <span className="select-none">{getOptionLabel(option)}</span>
          </li>
        ))}
      </ul>
    )
  },
)
