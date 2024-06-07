import { useState } from "react"
import { useEffect } from "react"

export function Clock() {
  const [currentTime, setTime] = useState(new Date())
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    /* Il progetto è in Strict Mode, quindi utilizzo una
    cleanup function per fare in modo che l'intervallo si
    interrompa alla seconda costruzione del componente, in
    modo tale da avere un solo processo attivo */

    return (() => {
      clearInterval(timeInterval)
    })
  })
  
  return <h2>{currentTime.toLocaleTimeString()}</h2>
}