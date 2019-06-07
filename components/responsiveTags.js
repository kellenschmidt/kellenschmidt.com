import React from 'react'
import Responsive from 'react-responsive'

export const ExtraLarge = props => <Responsive {...props} minWidth={1200} />
export const Large = props => <Responsive {...props} minWidth={992} maxWidth={1199}/>
export const Medium = props => <Responsive {...props} minWidth={768} maxWidth={991} />
export const Small = props => <Responsive {...props} maxWidth={767} />
export const MediumAndBelow = props => <Responsive {...props} maxWidth={991} />
export const MediumAndAbove = props => <Responsive {...props} minWidth={768} />
export const LargeAndAbove = props => <Responsive {...props} minWidth={992} />
