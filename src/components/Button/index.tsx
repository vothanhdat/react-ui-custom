import { elFactory } from "../../core/elFactory"
import { colorPropsToClass, flexItemClasses, layoutPropsToClass, shapePropsToClass, statePropsToClass } from "../_base"

export const Button = elFactory(
  'button',
  'button hoverable',
  {
    ...colorPropsToClass,
    ...shapePropsToClass,
    ...statePropsToClass,
    ...flexItemClasses,
    ...layoutPropsToClass,
    isMobileIconOnly: 'mobile-icon-only',
    isIcon: "icon-only"
  },
  {},
  "Button"
)


export const Buttons = elFactory('div', 'buttons', {
  ...flexItemClasses,
  ...colorPropsToClass,
  ...shapePropsToClass,
}, {}, "Buttons")