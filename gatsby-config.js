module.exports = {
  siteMetadata: {
    title: "Kelvin-FrontEnd-Notes",
    description: `Notes & Code Snippets`,
    author: "Kelvin Liang",
  },
  plugins: [
    {
      resolve: "gatsby-theme-code-notes",
      options: {
        contentPath: "notes",
        basePath: "/",
        showThemeInfo: false,
        showDescriptionInSidebar: true,
        logo: "./assets/images/logo-simple-s.png",
      },
    },
  ],
};
