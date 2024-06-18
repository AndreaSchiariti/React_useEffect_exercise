import { LanguageContext } from "../LanguageContext";
import { Clock } from "./Clock";
import {useState} from "react"

export function App() {
  const [language, setLanguage] = useState("en")

  return (
    <div>
      <select name="remember" id="language" onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="it">Italiano</option>
      </select>
      <LanguageContext.Provider value={language} >
      <Clock />
      </LanguageContext.Provider>
    </div>
  )
}