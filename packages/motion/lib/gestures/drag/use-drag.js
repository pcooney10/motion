import { useEffect } from "react";
import { VisualElementDragControls } from "./VisualElementDragControls";
import { useConstant } from "../../utils/use-constant";
/**
 * A hook that allows an element to be dragged.
 *
 * @internal
 */
export function useDrag(props) {
    var groupDragControls = props.dragControls, visualElement = props.visualElement;
    var dragControls = useConstant(function () { return new VisualElementDragControls(visualElement); });
    // If we've been provided a DragControls for manual control over the drag gesture,
    // subscribe this component to it on mount.
    useEffect(function () { return groupDragControls && groupDragControls.subscribe(dragControls); }, [dragControls, groupDragControls]);
    // Apply the event listeners to the element
    useEffect(function () { return dragControls.addListeners(); }, [dragControls]);
}
//# sourceMappingURL=use-drag.js.map