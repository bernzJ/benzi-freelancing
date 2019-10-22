export const defaultLocale = "en"

export const locales = {
    en: {
        code: "en",
        name: "English"
    },
    fr: {
        code: "fr",
        name: "Français"
    }
}

//export const prefixPath = (path, prefix) => `/${prefix}/${path}`

export const getLangFromLocation = (pathname) => {
    let code = pathname === "/" ? locales[defaultLocale].code : locales[pathname.split('/')[1].trim()].code
    return locales[code] ? locales[code].code : locales[defaultLocale]
}

/*export const validateSlug = () => {

    let pathname = window.location.pathname
    if (!locales.find(e => e.code === getLangFromLocation(pathname))) {
        let location = pathname.split('/')
        location.splice(1, 1, defaultLocale)
        window.location.href = location.join('/').trim()
    }
}*/