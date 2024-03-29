import { XIcon, ArrowLeftIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import React from 'react'
import { ISeparatorProps } from '../../layout'
import { EventCallback } from '../../types/globalTypes'
import { IModalBodyProps, ModalBody } from './ModalBody'
import { IModalHeaderProps, ModalHeader } from './ModalHeader'
import { ModalSeparator } from './ModalSeparator'

const ANIMATIONS_OUT_DURATION = 65
const ANIMATIONS_IN_DURATION = 50

interface IModalProps extends React.ComponentPropsWithoutRef<'span'> {
  open?: boolean
  onBack?: EventCallback
  onClose?: EventCallback
  preventClose?: boolean
}

interface IModalProperties {
  Header: React.FC<IModalHeaderProps>
  Body: React.FC<IModalBodyProps>
  Separator: React.FC<ISeparatorProps>
}

const Modal: React.FC<IModalProps> & IModalProperties = ({
  open,
  onBack,
  onClose,
  children,
  className,
  preventClose = false,
  ...props
}: IModalProps) => {
  const enteringOverlayClasses = `ease-out duration-${ANIMATIONS_OUT_DURATION} opacity-100`
  const leavingOverlayClasses = `ease-in duration-${ANIMATIONS_IN_DURATION} opacity-0  pointer-events-none scale-0`

  const enteringPanelClasses = `ease-out duration-${ANIMATIONS_OUT_DURATION} opacity-100 translate-y-0 md:translate-y-1/2`
  const leavingPanelClasses = `ease-in duration-${ANIMATIONS_IN_DURATION} opacity-0  pointer-events-none translate-y-full`

  const handleCloseModal = (event: React.SyntheticEvent) => {
    !preventClose && onClose && onClose(event)
  }

  return (
    <>
      <div
        className={clsx(
          'fixed inset-0 backdrop-blur transition-opacity',
          open ? enteringOverlayClasses : leavingOverlayClasses,
        )}
        style={{zIndex: 9999}}
        onClick={handleCloseModal}
      />
      <div
        className={clsx(
          'max-h-screen py-6 px-3 fixed bottom-0 inset-x-auto md:inset-x-0 rounded-t-2xl bg-neutral-1 transition-all md:rounded-b-2xl md:bottom-1/2 transform overflow-y-auto w-full lg:w-9/12	xl:w-1/2 m-auto',
          open ? enteringPanelClasses : leavingPanelClasses,
          className,
        )}
        style={{zIndex: 9999}}
        {...props}
      >
        <div className="relative flex flex-col w-full">
          {onBack && (
            <button
              className="absolute top-0 left-0	outline-none h-8 w-8 flex justify-center items-center"
              onClick={onBack}
            >
              <ArrowLeftIcon className="h-6 w-6 text-neutral-8" />
            </button>
          )}
          {!preventClose && (
            <button
              className="absolute top-0 right-0	outline-none h-8 w-8 flex justify-center items-center"
              onClick={handleCloseModal}
            >
              <XIcon className="h-6 w-6 text-neutral-8" />
            </button>
          )}
          {children}
        </div>
      </div>
    </>
  )
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Separator = ModalSeparator

export { Modal, IModalProps, IModalProperties }
