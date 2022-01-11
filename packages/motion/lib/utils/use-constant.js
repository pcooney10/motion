import { useRef } from "react";
/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
export function useConstant(init) {
    var ref = useRef(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}
//# sourceMappingURL=use-constant.js.map