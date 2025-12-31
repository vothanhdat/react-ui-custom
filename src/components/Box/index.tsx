import { elFactory } from '../../core/elFactory'
import { colorPropsToClass, shapePropsToClass } from '../_base'
import '../css/index.css'

export const Box = elFactory(
  'div',
  'box',
  {
    ...colorPropsToClass,
    ...shapePropsToClass,
    isBordered: 'border',
    isPadded: 'box-padding',
    fillBg: 'fill-bg',
  } as const,
  {
    variant: 'filled',
    fillBg: true,
  },
  'Box',
)

export const Card = Box
