import { Hero, Technologies, Projects, Formation, About } from "./"

export const Main = ({ translations, currentLang }) => {
    return <main>
        <Hero translations={translations} currentLang={currentLang} />
        <Technologies translations={translations} currentLang={currentLang} />
        <Projects translations={translations} currentLang={currentLang} />
        <Formation translations={translations} currentLang={currentLang} />
        <About translations={translations} currentLang={currentLang} />
    </main>
}