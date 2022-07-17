import { useEffect, useState } from 'react'

// This hook mount on when DOM will fully rendered. It will prevent ssr hydration mismatch
export default function useMount() {
    const [isMount, setIsMount] = useState(false)

    useEffect(() => {
        setIsMount(true)
    }, [])

    return isMount
}
