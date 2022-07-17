/* eslint-disable import/prefer-default-export */

import useMediaQuery from '../hooks/useMediaQuery'

export function XsScreen({ children, onChange }) {
    const { isXsScreen } = useMediaQuery(onChange)
    return isXsScreen && children
}

export function SmScreen({ children, onChange }) {
    const { isSmScreen } = useMediaQuery(onChange)
    return isSmScreen && children
}

export function MdScreen({ children, onChange }) {
    const { isMdScreen } = useMediaQuery(onChange)
    return isMdScreen && children
}

export function LgScreen({ children, onChange }) {
    const { isLgScreen } = useMediaQuery(onChange)
    return isLgScreen && children
}

export function XlScreen({ children, onChange }) {
    const { isXlScreen } = useMediaQuery(onChange)
    return isXlScreen && children
}

export function DoubleXlScreen({ children, onChange }) {
    const { is2XlScreen } = useMediaQuery(onChange)
    return is2XlScreen && children
}
