import React, { ReactNode } from 'react'

interface IEmptyProps {
    children: string | ReactNode
}

export default function Empty(props: IEmptyProps) {
  return (
    <div>
        {props.children}
    </div>
  )
}
