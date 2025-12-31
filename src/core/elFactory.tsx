import type * as React from "react"
import { className, type ClassesParam } from "./className"
import { propsToClassNameFactory, type PropToClassFactoryParams, type ClassFlags } from "./propsToClassNameFactory"
import type { Meta } from "@storybook/react-vite"


type ElFactoryInput = keyof HTMLElementTagNameMap | React.FC<any>

type ElFactoryProps<T extends ElFactoryInput> =
    T extends keyof HTMLElementTagNameMap
    ? React.HTMLAttributes<HTMLElementTagNameMap[T]>
    : T extends React.FC<infer P> ? P : never

const getDefaultName = <K extends ElFactoryInput,>(El: K, classesName: ClassesParam) => [
    `EL[${typeof El == 'string' ? El : (El?.displayName ?? "Unknown")}]`,
    ...className(classesName).split(" "),
].filter(Boolean).join(".")

export const elFactory = <
    K extends ElFactoryInput,
    T extends PropToClassFactoryParams
>(
    El: K,
    classesName: ClassesParam,
    classesParams: T,
    defaultProps?: ClassFlags<T> & ElFactoryProps<K>,
    componentName = getDefaultName(El, classesName)
) => {

    type ComponentProps<T extends PropToClassFactoryParams> = ClassFlags<T> & Omit<ElFactoryProps<K>, keyof T>

    type ComponentType<T extends PropToClassFactoryParams> = React.FC<ComponentProps<T>>
        & {
            extends<V extends PropToClassFactoryParams>(
                classesName: ClassesParam,
                classesParams: V,
                _defaultProps?: ClassFlags<V & T> & ElFactoryProps<K>,
                componentName?: string,
            ): ComponentType<T & V>,
            getExtendsClassesParams(): [ClassesParam, T, ClassFlags<T> & ElFactoryProps<K>],
        }

    const propToClassName = propsToClassNameFactory(classesParams, classesName)

    //@ts-ignore
    const Comp: ComponentType = (props) => <El {...propToClassName({ ...props, ...defaultProps })} />

    Comp.extends = <V extends PropToClassFactoryParams>(
        _classesName: ClassesParam,
        _classesParams: V,
        _defaultProps?: ClassFlags<V & T> & ElFactoryProps<K>,
        componentName = getDefaultName(El, classesName)
    ) => elFactory(
        El,
        className(classesName, _classesName),
        { ...classesParams, ..._classesParams },
        { ..._defaultProps, ...defaultProps } as any,
        componentName,
    )

    Comp.getExtendsClassesParams = () => [
        classesName,
        classesParams,
        defaultProps,
    ]

    Comp.displayName = componentName;

    return Comp as ComponentType<T>
}


export const getStoryBookArgTypes = <K extends ElFactoryInput, T extends PropToClassFactoryParams>(
    Component: ReturnType<typeof elFactory<K, T>>
): Meta<typeof Component>['argTypes'] => {

    const [, classesParams, ] = Component.getExtendsClassesParams()

    return Object.fromEntries(
        Object.entries(classesParams)
            .map(([k, v]) => {

                if (typeof v === 'string') {
                    return [k, {
                        control: 'boolean',
                        table:{
                            defaultValue: false,
                        }   
                    }]

                } else if (v instanceof Array) {
                    return [k, {
                        options: v,
                        control: { type: 'inline-radio' },
                      
                    }]
                } else {
                    return undefined as never
                }

            })
            .filter(Boolean)
    )
}