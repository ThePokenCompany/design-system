import React from 'react'
import { EventCallback } from '../types/globalTypes'
import { callHandlers } from './callHandlers'

export function composeHandlers(handlers: (EventCallback| undefined)[]) {
  return (event: React.SyntheticEvent) => {
    callHandlers(event, handlers)
  }
}
