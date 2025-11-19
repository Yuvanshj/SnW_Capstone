import React from 'react'
import { Button } from "../ui/flow-hover-button";

export default function Hoverbtn({ icon, children }: { icon?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <Button icon={icon}>
      {children ?? 'Hover Over Me'}
    </Button>
  )
}
