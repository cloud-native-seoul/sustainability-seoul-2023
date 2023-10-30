import * as React from "react";
import { Link } from "gatsby";
import Head from "../components/head";
import "../styles/styles.css";
import * as cssVars from "../styles/variables.module.css";
import * as styles from "./layout.module.css";
import { FormattedMessage } from "react-intl";

export default function Layout(props) {
  return (
    <div className={[cssVars.root, styles.root].join(" ")}>
      <Head
        title="Cloud Native Sustainability Week in Seoul"
        description="Cloud Native Sustainability Week 행사 소개"
      />
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>
        <Link to="https://www.facebook.com/groups/InfraEngineer/">
          <FormattedMessage id="itinfra" />
        </Link>
        <Link to="https://www.facebook.com/groups/openstack.kr/">
          <FormattedMessage id="openstack" />
        </Link>
        <Link to="https://ubuntu-kr.org/">
          <FormattedMessage id="ubuntu" />
        </Link>
      </footer>
    </div>
  );
}
