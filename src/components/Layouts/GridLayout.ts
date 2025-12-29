import { elFactory } from "../../core/elFactory";
import { gridContainerClasses, gridItemClasses } from "../_base";
import "./../css/index.css"



export const GridLayout = {
    GridContainer: elFactory('div', 'grid-container', {
        ...gridContainerClasses,
    }),
    GridItem: elFactory('div', 'grid-item', {
        ...gridItemClasses
    }),
};
