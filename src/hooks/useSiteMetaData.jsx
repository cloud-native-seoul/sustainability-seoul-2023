import { graphql, useStaticQuery } from "gatsby";

const useSiteMetaData = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          hero {
            heroHeading
            heroSecondaryHeading
            heroContent
          }
          about {
            aboutTitle
            aboutContent
          }
          session1 {
            session1Title
            session1Link
            session1Content
          }
          session2 {
            session2Title
            session2Link
            session2Content
          }
          session3 {
            session3Title
            session3Link
            session3Content
          }
          sponsors {
            sponsorTitle
            sponsorContent
          }
        }
      }
    }
  `);

  return site.siteMetadata;
};

export default useSiteMetaData;
