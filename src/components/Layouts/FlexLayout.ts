import { elFactory } from "../../core/elFactory";
import { flexContainerClasses, flexItemClasses } from "../_base";
import "./../css/index.css"


export const FlexLayout = {
    Container: elFactory('div', 'container', {
        ...flexContainerClasses,
    }),
    Item: elFactory('div', 'item', {
        ...flexItemClasses
    }),
};
