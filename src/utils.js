export const getImageUrl = path => `./assets/${path}`

export const changeLangAttr = (lang) => document.documentElement.setAttribute('lang', lang)

export const changeMetaDescr = (lang) => {
    const metaDescription = document.head.querySelector('meta[name="description"]')

    if(lang === 'es') {
        metaDescription.content = 'Desarrollador front-end junior, dedicado a la creación de experiencias digitales de calidad y con gran entusiasmo por aprender y crecer en proyectos desafiantes con equipos dinámicos.'
    }
    else {
        metaDescription.content = 'Junior front-end developer dedicated to creating quality digital experiences, with a strong enthusiasm for learning and growth in challenging projects with dynamic teams.'
    }
}