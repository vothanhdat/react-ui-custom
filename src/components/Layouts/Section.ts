import { elFactory } from "../../core/elFactory";
import { colorPropsToClass } from "../_base";
import { FlexLayout } from "./FlexLayout";
import { GridLayout } from "./GridLayout";
import "./../css/index.css"



export const Section = {
    Root: elFactory(
        'section',
        'section fade-in variant-filled',
        {
            ...colorPropsToClass,
            section: ["small", "medium", "large"]
        } as const,
        {},
        "Section.Root"
    ),
    FlexBody: FlexLayout.Container.extends(
        'section-body',
        {},
        {},
        "Section.FlexBody",
    ),
    GridBody: GridLayout.GridContainer.extends(
        'section-body',
        {},
        {},
        "Section.GridBody",
    ),
};

