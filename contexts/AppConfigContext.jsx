import { createContext, useContext } from 'react'
import config from '../config/app'

export const AppConfigContext = createContext()

export function useAppConfig() {
    return useContext(AppConfigContext)
}

export default function AppConfigProvider({ children }) {
    return <AppConfigContext.Provider value={config}>{children}</AppConfigContext.Provider>
}
