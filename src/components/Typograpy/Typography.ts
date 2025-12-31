import { DynamicElFactory } from "../../core/DynamicEl";
import { elFactory } from "../../core/elFactory";
import { animateIn, colorPropsToClass, textLayout, textVariant } from "../_base";
import "../css/index.css"

const colorsBaseClassParams = {
    ...textVariant,
    ...colorPropsToClass,
    ...animateIn,
    skeleton: 'skeleton',
}

export const Typo = {
    Title: elFactory(
        DynamicElFactory<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>({ as: 'h4' }),
        '',
        {
            ...colorsBaseClassParams,
            ...textLayout,
            spaced: 'spaced',
        },
        {},
        "Typo.Title"
    )
    ,
    Text: elFactory(
        'p', 'text',
        {
            ...colorsBaseClassParams,
            ...textLayout,
            spaced: 'spaced',
        },
        {},
        "Typo.Text"
    ),
    Inline: elFactory(
        'span', 'text',
        {
            ...colorsBaseClassParams,
        },
        {},
        "Typo.Inline"
    ),
}