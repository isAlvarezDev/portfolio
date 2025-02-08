import { Navbar } from "./Navbar/Navbar"

export const Header = ({ translations, currentLang }) => {
    return <header>
        <Navbar translations={translations} currentLang={currentLang} />
    </header>
}