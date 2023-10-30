import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Section from "../../components/section";
import Content from "../../components/content";
import * as styles from "./contents.module.css";
import Pictures from "../pictures";
import { FormattedMessage } from "react-intl";

export default function Contents() {
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
          primaryText={<FormattedMessage id="aboutTitle" />}
          link={""}
          content={<FormattedMessage id="aboutContent" />}
          image={getImage(data?.heroImage)}
          orientation="default"
        />
        <Pictures />
        <Content
          primaryText={<FormattedMessage id="session1Title" />}
          link={<FormattedMessage id="session1Link" />}
          content={<FormattedMessage id="session1Content" />}
          image={getImage(data?.session1Image)}
          orientation="default"
        />
        <Content
          primaryText={<FormattedMessage id="session2Title" />}
          link={<FormattedMessage id="session2Link" />}
          content={<FormattedMessage id="session2Content" />}
          image={getImage(data?.session2Image)}
          orientation="default"
        />
        <Content
          primaryText={<FormattedMessage id="session3Title" />}
          link={<FormattedMessage id="session3Link" />}
          content={<FormattedMessage id="session3Content" />}
          image={getImage(data?.session3Image)}
          orientation="default"
        />
        <Content
          primaryText={<FormattedMessage id="sponsorTitle" />}
          link={""}
          content={<FormattedMessage id="sponsorContent" />}
          image={getImage(data?.sponsorImage)}
          orientation="default"
        />
      </div>
    </Section>
  );
}
