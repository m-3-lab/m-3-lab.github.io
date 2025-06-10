module.exports = {
   //pathPrefix: '/m-3-lab',
  siteMetadata: {
    author: 'David Bernstein',
    //  description: 'Developing predictive computational models of microbial metabolism', // uncomment when officially posted
      description: '', // comment out when under maintenance
    siteUrl: 'https://m-3-lab.github.io/',
    title: 'Microbiome Metabolic Modeling',
    // List of link buttons to include on the landing image. Delete this field
    // and/or all entires if you do not want these links.
    // options: 'contact', 'opportunities', 'people', 'publications', 'research'
    // primaryLinks: [
    //  'Research',
    //  'Opportunities',
    // ],
    
    // List of PubMed IDs to include on the publication page. Delete this field
    // and/or all entires if you do not want the publication page.
    publications: [
      34904863,
      33602294,
      36802169,
      37888487,
      31194675,
      34635859
    ],
    // An array of links to display in the page footer. Include as many as you like
    // (not just the ones here). If either the link or text is missing,
    // it will not be shown. Delete this field and/or all entires to disable
    // footer links.
    footerLinks: [
      { text: 'GitHub', link: 'https://github.com/m-3-lab' },
      { text: 'University of Vermont', link: 'https://www.uvm.edu/cems/ebe/profile/david-bernstein' },
      { text: 'LinkedIn', link: 'https://www.linkedin.com/in/david-b-bernstein/' },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-scientist',
        short_name: 'scientist',
        start_url: '/',
        background_color: '#0c563e',
        theme_color: '#0c563e',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark-mode',
        classNameLight: 'light-mode',
        storageKey: 'darkMode',
        minify: true,
      },
    },
  ],
};
