import React from 'react'
import Responsive from 'react-responsive'

export const Large = props => <Responsive {...props} minWidth={992} />
export const Medium = props => <Responsive {...props} minWidth={768} maxWidth={991} />
export const Small = props => <Responsive {...props} maxWidth={767} />
export const SmallOrMedium = props => <Responsive {...props} maxWidth={991} />
// export const Default = props => <Responsive {...props} minWidth={768} />;

