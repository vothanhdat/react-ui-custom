import { elFactory } from '../../core/elFactory'
import {
  colorPropsToClass,
  flexItemClasses,
  layoutPropsToClass,
  shapePropsToClass,
  statePropsToClass,
} from '../_base'
import '../css/index.css'

// Wrapper component. Intended usage:
// <Select ...>
//   <select ...>...</select>
// </Select>
export const Select = elFactory(
  'label',
  'select hoverable',
  {
    ...colorPropsToClass,
    ...shapePropsToClass,
    ...statePropsToClass,
    ...flexItemClasses,
    ...layoutPropsToClass,
    isMobileIconOnly: 'mobile-icon-only',
    isIcon: 'icon-only',
    multiLine: 'multi-line',
  } as const,
  {
    variant: 'outlined',
  },
  'Select',
)
