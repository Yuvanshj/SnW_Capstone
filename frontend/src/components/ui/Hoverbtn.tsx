import React from 'react'
import { Button } from "../ui/flow-hover-button";

export default function Hoverbtn({ icon, children, onClick }: { icon?: React.ReactNode; children?: React.ReactNode; onClick?: () => void }) {
  return (
    <Button icon={icon} onClick={onClick}>
      {children ?? 'Hover Over Me'}
    </Button>
  )
}
