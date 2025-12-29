import { elFactory } from "../../core/elFactory";
import { colorPropsToClass, shapePropsToClass } from "../_base";
import { FlexLayout } from "./FlexLayout";
import { GridLayout } from "./GridLayout";
import "./../css/index.css"



export const Section = {
    Root: elFactory('section', 'section fade-in', {
        ...colorPropsToClass,
        ...shapePropsToClass,
        small: 'small',
        medium: 'medium',
        large: 'large',
    }),
    FlexBody: FlexLayout.Container.extends(
        'section-body',
        {}
    ),
    GridBody: GridLayout.GridContainer.extends(
        'section-body',
        {}
    ),
};
