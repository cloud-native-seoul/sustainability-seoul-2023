import * as React from "react";
import Layout from "../layout";
import Page from "../components/page";
import Hero from "../sections/hero";
import Container from "../components/container";
import Contents from "../sections/contents";
import SimpleLocalize from "../SimpleLocalize";

export default function LandingPage(props) {
  return (
    <SimpleLocalize {...props}>
      <Layout>
        <Page>
          <Container>
            <Hero />
            <Contents />
          </Container>
        </Page>
      </Layout>
    </SimpleLocalize>
  );
}
