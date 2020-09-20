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
            </TabPanel>
            <TabPanel>
              <h2 className="tab-panel-title open-sans">
                Is credit the main factor in deciding whether to lend capital?
              </h2>
            </TabPanel>
            <TabPanel>
              <h2 className="tab-panel-title open-sans">
                What are the steps to take if I’m interested in knowing and
                learning more about Quadruple J. Capital?{" "}
              </h2>
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
