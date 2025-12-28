import { type ClassesParam, className } from "./className"

export type PropToClassFactoryParams = Record<string, string | readonly string[]>

export type ClassFlags<T extends PropToClassFactoryParams> = Partial<{
    [C in keyof T]?: T[C] extends string[] ? T[C][number] : boolean
}>

export const propsToClassNameFactory = <T extends PropToClassFactoryParams>(
    classesParams: T,
    initClassesName?: ClassesParam,
) => {

    return <V extends ClassFlags<T> & { className?: string } & Record<string, any>>(props: V) => {

        const newProps: Record<string, any> = {}
        const classes: Record<string, boolean> = {}

        for (const key in props) {
            if (key in classesParams) {
                const currentParam = classesParams[key]
                const value = props[key]
                if (typeof currentParam == 'string') {
                    if (value !== undefined) {
                        classes[currentParam] = !!value
                    }
                } else if (currentParam instanceof Array) {
                    if (typeof value === 'string') {
                        classes[currentParam + '-' + value] = true
                    }
                }
            } else {
                newProps[key] = props[key]
            }
        }

        newProps.className = className(
            newProps.className ?? "",
            initClassesName ?? "",
            classes,
        )

        return newProps as Omit<V, keyof T> & { className: string }

    }
}