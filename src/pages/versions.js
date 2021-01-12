/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useEffect } from "react";

import Layout from "@theme/Layout";

// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

// import versions from "../../versions.json";

const versions = ["0.1.00.220"];

function Version() {
  const [releases, setReleases] = useState(undefined);
  // const response = octokit.request("GET /orgs/{org}/repos", {
  //   org: "yazilim-vip",
  //   type: "private",
  // });
  // console.log(response);
  useEffect(() => {
    fetch("https://api.github.com/repos/yazilim-vip/spring-vip/releases")
      .then((response) => response.json())
      .then((data) => setReleases(data));
  }, []);

  // const context = useDocusaurusContext();
  // const { siteConfig = {} } = context;
  const [latestVersion] = versions;
  const pastVersions = versions.filter((version) => version !== latestVersion);
  const hasPastVersion = pastVersions.length !== 0;
  return (
    <Layout
      permalink="/versions"
      description="Neutron JS - CLI Versions page listing all documented site versions"
    >
      <div className="container margin-vert--xl">
        <h1>Spring VIP - Releases</h1>

        <div className="margin-bottom--lg">
          <table>
            <tbody>
              {releases ? (
                Object.keys(releases).map((value, index) => {
                  const release = releases[value];
                  return (
                    <tr key={release.tag_name}>
                      <th>{release.tag_name}</th>
                      <td>
                        <Link to={release.html_url}>Release Notes</Link>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <div>loading...</div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Version;
