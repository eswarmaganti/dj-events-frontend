import React from "react";
import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout title="AboutPage DJ Events">
      <div className="text-center">
        <h1 className="text-medium text-xl text-sky-600">About</h1>
        <p className="my-2 text-sm">
          This is an app to find the latest DJ and other musical events{" "}
        </p>
        <p className="text-sm text-neutral-400">Version 1.0.0</p>
      </div>
    </Layout>
  );
};

export default AboutPage;
