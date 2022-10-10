import { useMemo } from "react"

export const useMobile = () => {
   const isMobile = useMemo(() => {
      if (window.innerWidth <= 1024) {
         return true
      } else {
         return false
      }
   }, [window.innerWidth])

   return {
      isMobile,
   }
}