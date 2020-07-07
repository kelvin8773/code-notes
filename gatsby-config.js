module.exports = {
  siteMetadata: {
    title: "Kelvin-FrontEnd-Notes",
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
      },
    },
  ],
};
