import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { Button } from '../../actions'
import { STORIES_GROUPS } from '../../utils/storiesGroups'
import { IModalProps, Modal } from './Modal'

export default {
  title: `${STORIES_GROUPS.POPOVERS}/Modal`,
  component: Modal,
  argTypes: { onClose: { action: 'close' } },
}

const Template: Story<IModalProps> = ({ onClose, open, ...args }) => {
  return (
    <Modal open={open} onClose={onClose} {...args}>
      <Modal.Header>Are you sure you want to accept the offer?</Modal.Header>
      <Modal.Separator />
      <Modal.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero totam
        illum praesentium accusamus exercitationem facere optio officiis,
        corporis maxime architecto, quis nobis accusantium iste deleniti,
        repellat rerum dignissimos qui deserunt!
      </Modal.Body>
      <Button className="w-full" onClick={onClose}>
        Accept the Offer
      </Button>
    </Modal>
  )
}

export const Demo = Template.bind({})

Demo.args = {
  open: true,
  onClose: (event: React.MouseEvent) => console.log('event', event),
}

export const Example = () => {
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="flex justify-center">
      <Button onClick={() => setOpen(true)} className="mt-4">
        Toggle modal
      </Button>

      <Modal onClose={handleClose} open={open}>
        <Modal.Header>Are you sure you want to accept the offer?</Modal.Header>
        <Modal.Separator />
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero totam
          illum praesentium accusamus exercitationem facere optio officiis,
          corporis maxime architecto, quis nobis accusantium iste deleniti,
          repellat rerum dignissimos qui deserunt!
        </Modal.Body>
        <Button className="w-full" onClick={handleClose}>
          Accept the Offer
        </Button>
      </Modal>
    </div>
  )
}
