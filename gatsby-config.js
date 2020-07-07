module.exports = {
  siteMetadata: {
    title: "Kelvin-Notes",
    description: `Kelvin's Tech Notes`,
    author: "Kelvin Liang",
  },
  plugins: [
    {
      resolve: "gatsby-theme-code-notes",
      options: {
        contentPath: "notes",
        basePath: "/",
        gitRepoContentPath:
          "https://github.com/kelvin8773/code-notes/tree/master/notes",
        showThemeInfo: false,
        showDescriptionInSidebar: true,
        logo: "",
        openSearch: {
          siteShortName: `Kelvin Code Notes`,
          siteUrl: "https://notes.kelvinliang.cn/",
          siteTags: "front-end",
          siteContact: "https://twitter.com/kelvin9877",
          siteDescription:
            "Collection of Codes. My Tech Memory. By Kelvin Liang.",
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`, `/tag/*`],
      },
    },
  ],
};
