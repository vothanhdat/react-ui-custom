import type { PropToClassFactoryParams } from "../core/propsToClassNameFactory"

export const flexContainerClasses = {
    row: 'rows-flex',
    col: 'cols-flex',
    wrap: 'flex-wrap',
    padding: 'flex-padding',
    gap: 'flex-gap',
    center: 'flex-center'
} satisfies PropToClassFactoryParams

export const flexItemClasses = {
    flex: ['fill', 'half', 'third', 'quater'],
} satisfies PropToClassFactoryParams




export const gridContainerClasses = {

} satisfies PropToClassFactoryParams

export const gridItemClasses = {

} satisfies PropToClassFactoryParams



export const colorThemeContainer = {

} satisfies PropToClassFactoryParams

export const colorItems = {

} satisfies PropToClassFactoryParams

export const sharpThemeContainer = {



} satisfies PropToClassFactoryParams


export const sharpItems = {

} satisfies PropToClassFactoryParams


export const colorPropsToClass = {
    color: ['link', 'primary', 'success', 'danger', 'secondary', 'contract'] as const
} as const satisfies PropToClassFactoryParams

export const shapePropsToClass = {
    variant: ['outlined', 'filled', 'dimmed', 'flatten', 'elevated'] as const
} as const satisfies PropToClassFactoryParams


export const textVariant = {
    small: 'text-small',
    medium: 'text-medium',
    large: 'text-large',
    subtitle: 'text-subtitle',
    description: 'text-description',
    skeleton: 'skeleton',
    bold: 'text-bold',
    light: 'text-light',
} satisfies PropToClassFactoryParams



export const textLayout = {
    center: 'align-center',
    left: 'align-left',
    right: 'align-right',
    nowrap: 'nowrap',
} satisfies PropToClassFactoryParams

export const animateIn = {
    fadeIn: 'fade-in',
    flashIn: 'flash-in',

} satisfies PropToClassFactoryParams


export const statePropsToClass = {
    isLoading: 'loading',
    isLoadingPre: 'loading-pre',
    isActive: 'active',
    skeleton: 'skeleton',
    disabled: 'disabled',
} satisfies PropToClassFactoryParams


export const layoutPropsToClass = {
    block: 'block',
    square: 'aspect-1-1',
} satisfies PropToClassFactoryParams
