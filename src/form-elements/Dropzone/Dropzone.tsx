import clsx from 'clsx'
import React, { InputHTMLAttributes } from 'react'
import { composeHandlers } from '../../utils/composeHandlers'
import { stopEvent } from '../../utils/stopEvent'

export interface DropzoneProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

function handleDragOver(event: React.MouseEvent) {
  // This prevents the browser from trying to load whatever file the user
  // dropped on the window.
  stopEvent(event)
}

export function Dropzone({
  label,
  disabled,

  // Forwarded props.
  style,
  accept,
  multiple,
  className,
  onDragEnter,
  onDragOver,
  onDragLeave,
  onDrop,
  onChange,
  ...props
}: DropzoneProps) {
  const [dragOver, setDragOver] = React.useState(false)
  const inputElement = React.useRef<HTMLInputElement>(null)
  const dragCounter = React.useRef(0)

  function handleDragEnterOrLeave(event: React.MouseEvent) {
    if (disabled) {
      return
    }

    // We are listening for events on a root element, so every time the user
    // drag enter or leave any of its children the event bubbles up to the
    // root.
    // The issue is that onDragEnter is called **before** onDragLeave, which
    // make it hard to know if the drag is still over the root element.
    // By keeping count of how many onDragEnter we get, we can tell if the
    // user is still dragging over.
    // You get one onDragEnter initially, and one pair of
    // onDragEnter/onDragLeave for every bubble.
    dragCounter.current += event.type === 'dragenter' ? 1 : -1

    if (dragCounter.current === 1) {
      setDragOver(true)
    } else if (dragCounter.current === 0) {
      setDragOver(false)
    }
  }

  function handleDrop(event: React.MouseEvent) {
    event.preventDefault()
    dragCounter.current = 0
    setDragOver(false)
  }

  function handleClickInput() {
    inputElement?.current?.click()
  }

  return (
    <div
      style={style}
      className={clsx(
        className,
        'border-2 bg-neutral-2 flex flex-col justify-center items-center p-5 rounded text-center',
        dragOver ? 'border-primary' : 'border-neutral-2',
      )}
      onDragEnter={composeHandlers([handleDragEnterOrLeave, onDragEnter])}
      onDragOver={composeHandlers([handleDragOver, onDragOver])}
      onDragLeave={composeHandlers([handleDragEnterOrLeave, onDragLeave])}
      onDrop={composeHandlers([handleDrop, onDrop])}
    >
      <span
        className={clsx(
          'text-neutral-4 text-xs mb-3',
          dragOver && 'opacity-70',
        )}
      >
        {label}
      </span>

      <button
        onClick={handleClickInput}
        className={clsx(
          'text-primary underline text-xs',
          dragOver && 'opacity-70',
          disabled && 'cursor-not-allowed text-neutral-4',
        )}
      >
        Upload File
      </button>

      <input
        {...props}
        accept={accept}
        multiple={multiple}
        type="file"
        className="hidden"
        onChange={onChange}
        ref={inputElement}
      />
    </div>
  )
}
