import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Section from "../../components/section";
import * as styles from "./hero.module.css";
import { graphql, useStaticQuery } from "gatsby";

export default function Hero({ heading, secondaryHeading, content }) {
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
          <h2 className={styles.secondaryHeading}>{secondaryHeading}</h2>
          <h1 className={styles.heading}>{heading}</h1>
          <p>{content}</p>
          <p>
            <a href="https://yozm.wishket.com/magazine/detail/2257/">요즘 IT</a>
            ,{" "}
            <a href="https://biz.chosun.com/it-science/general_policy/2023/09/25/OK6DFK5PVVESDKYHKCL4OFUASA/">
              조선 비즈
            </a>
            , <a href="https://www.jumpit.co.kr/contents/422">점핏</a> 등 다양한
            곳에서 행사가 소개되었습니다. 운영진과 자원봉사자분들의 노력으로
            행사가 성공적으로 마무리될 수 있었습니다. 다시 한번 모든 분들께
            감사드립니다.
          </p>
        </div>
        <div className={styles.image}>
          <GatsbyImage alt="Image" image={getImage(heroImageQuery?.file)} />
        </div>
      </div>
    </Section>
  );
}
