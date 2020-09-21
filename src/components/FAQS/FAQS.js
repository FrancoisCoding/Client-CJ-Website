import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./FAQS.css";
import "./FAQSTABS.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const FAQS = () => {
  return (
    <div>
      <Navbar />
      <div className="faqs">
        <div className="faqs-top">
          <h1 className="faqs-top-header times">FREQUENTLY ASKED QUESTIONS</h1>
          <img
            src="https://i.imgur.com/uGzn1fR.png"
            alt="Questions"
            className="faqs-image"
          />
        </div>

        <div className="faqs-tabs">
          <Tabs>
            <TabList>
              <Tab>
                <h3 className="tab-title open-sans">
                  Hard Money vs. Private Money. What’s the difference?
                </h3>
              </Tab>
              <Tab>
                <h3 className="tab-title open-sans">
                  What states does Quadruple J. Capital lend to?
                </h3>
              </Tab>
              <Tab>
                <h3 className="tab-title open-sans">
                  Is credit the main factor in deciding whether to lend capital?
                </h3>
              </Tab>
              <Tab>
                <h3 className="tab-title open-sans">
                  What are the steps to take if I’m interested in knowing and
                  learning more about Quadruple J. Capital?
                </h3>
              </Tab>
            </TabList>

            <TabPanel>
              <h2 className="tab-panel-title open-sans">
                Hard Money vs. Private Money. What’s the difference?
              </h2>
              <p className="tab-panel-text open-sans">
                As mentioned on my About Me page, you’ve probably heard it
                referred to as, “Private Money,” “Hard Money”, “Equity-Based
                Financing,” “Bridge Financing,” or “Creative Financing,” and for
                the most part, they all mean the same thing
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="tab-panel-title open-sans">
                What states does Quadruple J. Capital lend to?
              </h2>
              <p className="tab-panel-text open-sans">
                We can lend capital to you if you are from the following states:
              </p>
              <div className="faqs-text-list open-sans">
                <ul className="faqs-list">
                  <li>Alabama</li>
                  <li>Alaska</li>
                  <li>Arkansas</li>
                  <li>Colorado</li>
                  <li>Connecticut</li>
                  <li>Delaware</li>
                  <li>Florida</li>
                  <li>Georgia</li>
                  <li>Hawaii</li>
                  <li>Idaho</li>
                  <li>Illinois</li>
                  <li>Indiana</li>
                  <li>Iowa</li>
                  <li>Kansas</li>
                  <li>Kentucky</li>
                  <li>Louisiana</li>
                  <li>Maine</li>
                  <li>Maryland</li>
                  <li>Massachusetts</li>
                  <li>Michigan</li>
                  <li>Alabama</li>
                  <li>Alaska</li>
                  <li>Arkansas</li>
                  <li>Colorado</li>
                  <li>Connecticut</li>
                  <li>Delaware</li>
                  <li>Florida</li>
                  <li>Georgia</li>
                  <li>Hawaii</li>
                  <li>Idaho</li>
                  <li>Illinois</li>
                  <li>Indiana</li>
                  <li>Iowa</li>
                  <li>Kansas</li>
                  <li>Kentucky</li>
                  <li>Louisiana</li>
                  <li>Maine</li>
                  <li>Maryland</li>
                  <li>Massachusetts</li>
                  <li>Michigan</li>
                  <li>Mississippi</li>
                  <li>Missouri</li>
                  <li>Montana</li>
                  <li>Nebraska</li>
                  <li>New Hampshire</li>
                  <li>New Mexico</li>
                  <li>Ohio</li>
                  <li>Oklahoma</li>
                  <li>Pennsylvania</li>
                  <li>Rhode Island</li>
                  <li>South Carolina</li>
                  <li>Tennessee</li>
                  <li>Texas</li>
                  <li>Virginia</li>
                  <li>Washington</li>
                  <li>West Virginia</li>
                  <li>Wisconsin</li>
                  <li>Wyoming</li>
                </ul>
              </div>
            </TabPanel>
            <TabPanel>
              <h2 className="tab-panel-title open-sans">
                Is credit the main factor in deciding whether to lend capital?
              </h2>
              <p className="tab-panel-text open-sans">
                No. Our loans are asset-based. We base our loans on the value of
                the asset, not on your credit score, income, or the size of your
                debts. However, a high credit score can potentially get you our
                better rates.
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="tab-panel-title open-sans">
                What are the steps to take if I’m interested in knowing and
                learning more about Quadruple J. Capital?
              </h2>
              <p className="tab-panel-text open-sans">
                You can contact us to schedule an appointment under the contact
                us page. Remember, whether you’re experienced or just starting
                out, we offer educational course to get a portfolio started
                and/or get better rates. Please let us help you!{" "}
              </p>
            </TabPanel>
          </Tabs>
        </div>

        <p className="tab-additional-info">
          For more FAQs from Arnold Lee visit{" "}
          <a
            href="https://cogocapital.com/"
            target="_blank"
            className="tab-link"
          >
            www.cogocapital.com
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default FAQS;
