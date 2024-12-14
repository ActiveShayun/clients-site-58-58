import { useContext } from "react"
import { AuthContext } from "../auth-context/AuthProvider"

const useContextHooks = () => {
    const context = useContext(AuthContext)
    return context;
}

export default useContextHooks

