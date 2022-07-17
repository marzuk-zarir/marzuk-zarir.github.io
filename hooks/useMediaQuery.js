/* eslint-disable import/no-extraneous-dependencies */

import { useMediaQuery as useReactMediaQuery } from 'react-responsive'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindCustomConfig from '../tailwind.config'
import useMount from './useMount'

const { theme } = resolveConfig(tailwindCustomConfig)

export default function useMediaQuery(onChangeHandler = undefined) {
    const isMount = useMount()

    const isXsScreen = useReactMediaQuery({
        maxWidth: parseInt(theme.screens.sm, 10) - 1,
        undefined,
        onChangeHandler
    })
    const isSmScreen = useReactMediaQuery({
        minWidth: theme.screens.sm,
        undefined,
        onChangeHandler
    })
    const isMdScreen = useReactMediaQuery({
        minWidth: theme.screens.md,
        undefined,
        onChangeHandler
    })
    const isLgScreen = useReactMediaQuery({
        minWidth: theme.screens.lg,
        undefined,
        onChangeHandler
    })
    const isXlScreen = useReactMediaQuery({
        minWidth: theme.screens.xl,
        undefined,
        onChangeHandler
    })
    const is2XlScreen = useReactMediaQuery({
        minWidth: theme.screens['2xl'],
        undefined,
        onChangeHandler
    })

    return {
        isXsScreen: isMount && isXsScreen,
        isSmScreen: isMount && isSmScreen,
        isMdScreen: isMount && isMdScreen,
        isLgScreen: isMount && isLgScreen,
        isXlScreen: isMount && isXlScreen,
        is2XlScreen: isMount && is2XlScreen
    }
}
