import { Hero, Technologies, Projects, Formation, About } from "./"

export const Main = ({ translations, currentLang }) => {
    return <main style={{backgroundColor:"#04152d"}}>
        <Hero translations={translations} currentLang={currentLang} />
        <Technologies translations={translations} currentLang={currentLang} />
        <Projects translations={translations} currentLang={currentLang} />
        <Formation translations={translations} currentLang={currentLang} />
        <About translations={translations} currentLang={currentLang} />
    </main>
}