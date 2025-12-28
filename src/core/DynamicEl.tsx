
import React from "react"



export const DynamicElFactory = <T extends keyof HTMLElementTagNameMap>(
    { as: DefaultComp, ...defaultProps }: { as: T } & React.HTMLAttributes<HTMLElementTagNameMap[T]>
) => {
    return (
        {
            as: Comp = DefaultComp,
            ...props
        }: { as?: T } & React.HTMLAttributes<HTMLElementTagNameMap[T]>
    ) => {
        //@ts-ignore
        return <Comp {...defaultProps} {...props} />
    }
}