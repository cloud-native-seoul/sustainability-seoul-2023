import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import useSiteMetaData from "../../hooks/useSiteMetaData";
import Section from "../../components/section";
import Content from "../../components/content";
import * as styles from "./contents.module.css";
import Pictures from "../pictures";

export default function Contents() {
  const { about, session1, session2, session3, sponsors } = useSiteMetaData();
  const { aboutTitle, aboutContent } = about;
  const { session1Title, session1Link, session1Content } = session1;
  const { session2Title, session2Link, session2Content } = session2;
  const { session3Title, session3Link, session3Content } = session3;
  const { sponsorTitle, sponsorContent } = sponsors;

  const data = useStaticQuery(graphql`
    {
      heroImage: file(relativePath: { eq: "sustainability-week.png" }) {
        childImageSharp {
          gatsbyImageData(width: 480)
        }
      }
      session1Image: file(relativePath: { eq: "session1.png" }) {
        childImageSharp {
          gatsbyImageData(width: 480)
        }
      }
      session2Image: file(relativePath: { eq: "session2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 480)
        }
      }
      session3Image: file(relativePath: { eq: "session3.png" }) {
        childImageSharp {
          gatsbyImageData(width: 480)
        }
      }
      sponsorImage: file(relativePath: { eq: "sponsors.png" }) {
        childImageSharp {
          gatsbyImageData(width: 480)
        }
      }
    }
  `);

  return (
    <Section>
      <div className={styles.contents}>
        <Content
          primaryText={aboutTitle}
          link={""}
          content={aboutContent}
          image={getImage(data?.heroImage)}
          orientation="default"
        />
        <Pictures />
        <Content
          primaryText={session1Title}
          link={session1Link}
          content={session1Content}
          image={getImage(data?.session1Image)}
          orientation="default"
        />
        <Content
          primaryText={session2Title}
          link={session2Link}
          content={session2Content}
          image={getImage(data?.session2Image)}
          orientation="default"
        />
        <Content
          primaryText={session3Title}
          link={session3Link}
          content={session3Content}
          image={getImage(data?.session3Image)}
          orientation="default"
        />
        <Content
          primaryText={sponsorTitle}
          link={""}
          content={sponsorContent}
          image={getImage(data?.sponsorImage)}
          orientation="default"
        />
      </div>
    </Section>
  );
}
