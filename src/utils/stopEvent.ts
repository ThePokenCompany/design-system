import React from "react";

export function stopEvent(event: React.SyntheticEvent){
    event.preventDefault()
    event.stopPropagation()
}