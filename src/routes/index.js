//const withLocalize = (slug) => `/:locale/${slug}`
import ProjectOneThumb from "../assets/project-1.jpg"

export const routes =
{
  index: {
    slug: "/",
    localized: "/:locale//"
  },
  projects: {
    slug: "/projects",
    localized: "/:locale/projects",
    blogs: [
      {
        slug: "/project-1",
        featured: false,
        thumbnail: ProjectOneThumb,
        date: 1571004019000,
        localized: {
          en: {
            title: "page title",
            description: "something small",
          },
          fr: {
            title: "titre de la page",
            description: "petit quelquechose",
          }
        }
      }
    ]
  }
}

export const getRouteFromPath = (path) => routes[path === "/:locale//" ? "index" : path.replace("/:locale/", "")]