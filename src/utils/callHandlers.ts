import React from "react"
import { EventCallback } from "../types/globalTypes"

export function callHandlers(event: React.SyntheticEvent, handlers: (EventCallback| undefined)[] ) {
    handlers.forEach((handler?: EventCallback) => {
      // Ingore falsy handlers to allow syntaxes like:
      //
      // ```js
      // const child = React.Children.only(this.props.children)
      // return React.cloneElement(child, {
      //   onClick: e => callHandlers(e, [this.handleClick, child.onClick])
      // })
      // ```
      if (handler) {
        handler(event)
      }
    })
  }