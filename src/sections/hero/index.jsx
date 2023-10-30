import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Section from "../../components/section";
import * as styles from "./hero.module.css";
import { graphql, useStaticQuery } from "gatsby";
import { FormattedMessage } from "react-intl";

export default function Hero() {
  const heroImageQuery = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "hero-illustration.png" }) {
        childImageSharp {
          gatsbyImageData(width: 480)
        }
      }
    }
  `);

  return (
    <Section>
      <div className={styles.root}>
        <div className={styles.content}>
          <h2 className={styles.secondaryHeading}>
            Language: {<a href="/ko">Kor</a>} | {<a href="/">Eng</a>}
          </h2>
          <h2 className={styles.secondaryHeading}>
            <FormattedMessage id="heroSecondaryHeading" />
          </h2>
          <h1 className={styles.heading}>
            <FormattedMessage id="heroHeading" />
          </h1>
          <p>
            <FormattedMessage id="heroContent" />
            <a href="https://yozm.wishket.com/magazine/detail/2257/">
              <FormattedMessage id="yozm" />
            </a>
            ,{" "}
            <a href="https://biz.chosun.com/it-science/general_policy/2023/09/25/OK6DFK5PVVESDKYHKCL4OFUASA/">
              <FormattedMessage id="chosun" />
            </a>
            ,{" "}
            <a href="https://www.jumpit.co.kr/contents/422">
              <FormattedMessage id="jumpit" />
            </a>
            <FormattedMessage id="heroContent2" />
          </p>
        </div>
        <div className={styles.image}>
          <GatsbyImage alt="Image" image={getImage(heroImageQuery?.file)} />
        </div>
      </div>
    </Section>
  );
}
