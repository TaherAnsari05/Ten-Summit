import  { useState } from "react";
import "./CookiePolicy.css";

const CookiePolicy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const [isChecked, setISChecked] = useState(true);
  const handleToggle = () => {
    setISChecked(!isChecked);
  };

  const [isChecked2, setISChecked2] = useState(true);
  const handleToggle2 = () => {
    setISChecked2(!isChecked2);
  };
  const [isChecked3, setISChecked3] = useState(true);
  const handleToggle3 = () => {
    setISChecked3(!isChecked3);
  };
  const [isChecked4, setISChecked4] = useState(true);
  const handleToggle4 = () => {
    setISChecked4(!isChecked4);
  };

  const cookiesData = [
    {
      name: "2025_monster_scale_registration_cookie",
      provider: "ScyllaDB Inc",
      expiration: "",
      purpose: "",
    },
    {
      name: "destination_url",
      provider: "",
      expiration: "",
      purpose: "",
    },
    {
      name: "drift_*",
      provider: "Drift",
      expiration: "",
      purpose: "",
    },
    {
      name: "osano_consentmanager",
      provider: "osano",
      expiration: "1 year",
      purpose: "Stores the user's current consent status.",
    },
    {
      name: "osano_consentmanager_uuid",
      provider: "osano",
      expiration: "1 year",
      purpose: "Stores the user's unique consent identifier.",
    },
    {
      name: "scylladb-docs-hide-banner",
      provider: "",
      expiration: "",
      purpose: "",
    },
    {
      name: "trc_cookie_storage",
      provider: "",
      expiration: "",
      purpose: "",
    },
    
  ];
  const cookiesData2 = [
    {
      name: "_twclid",
      provider: "",
      expiration: "",
      purpose: "",
    },
    {
      name: "^_fbc$",
      provider: "meta",
      expiration: "undifined",
      purpose: "Placed by Facebook to store last visit",
    },
    {
      name: "^_fbp$",
      provider: "meta",
      expiration: "3 months",
      purpose: "Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers",
    },
    {
      name: "^_gcl_.*",
      provider: "SalesLoft LLC",
      expiration: "30 days",
      purpose: "This cookie is set when the email recipient clicks through a Live Web Tracking tracked link.",
    },
    {
      name: "^sliguid$",
      provider: "SalesLoft LLC",
      expiration: "5 years",
      purpose: "This cookie provides an anonymous user identifier across multiple requests.",
    },
    {
      name: "^slireg$",
      provider: "SalesLoft LLC",
      expiration: "7 days",
      purpose: "This cookie identifies the SalesLoft server region that the Team's data is on.",
    },
    {
      name: "^slirequested$",
      provider: "SalesLoft LLC",
      expiration: "5 years",
      purpose: "Once the sliguid cookie has been confirmed against a central server, this cookie is set for every request that comes in.",
    },
    {
      name: "^visitor_id.*",
      provider: "",
      expiration: "10 years",
      purpose: "Used for tracking purposes.",
    },
    {
      name: "li_adsId",
      provider: "Linkedin Corporation",
      expiration: "",
      purpose: "",
    },
    {
      name: "li_giant",
      provider: "Linkedin Corporation",
      expiration: "",
      purpose: "",
    },
  ];
  
  const cookiesData3 = [
    {
      name: "^__stripe_.*",
      provider: "Calendly LLC",
      expiration: "undefined",
      purpose: "Allows the meeting scheduler to function within the website.",
    },
    {
      name: "googtrans",
      provider: "google LLC",
      expiration: "",
      purpose: "",
    },
    {
      name: "mc_subscribed",
      provider: "MailChimp",
      expiration: "",
      purpose: "",
    },
  ];

  const cookiesData4 = [
    {
      name: "_dd_s",
      provider: "",
      expiration: "",
      purpose: "",
    },
    {
      name: "_ga_.*",
      provider: "Google LLC",
      expiration: "2 years",
      purpose: "Used to persist session state.",
    },
    {
      name: "_gac_.*",
      provider: "Google LLC",
      expiration: "90 days",
      purpose: "Contains campaign related information for the user. If you have linked your Google Analytics and Google Ads accounts",
    },
    {
      name: "_gat_gtag_",
      provider: "Google LLC",
      expiration: "1 hours",
      purpose: "Used to set and get tracking data",
    },
    {
      name: "_lfa",
      provider: "Leadfeeder Inc",
      expiration: "",
      purpose: "",
    },
    {
      name: "^_ga$",
      provider: "google LLC",
      expiration: "2 years",
      purpose: "Associated with Google Universal Analytics to distinguish unique users by assigning a randomly generated number as a client identifier.",
    },
    {
      name: "^_gat_UA-.*",
      provider: "google LLC",
      expiration: "undefined",
      purpose: "Set by Google Analytics to identity the number of the account or website it relates to.",
    },
    {
      name: "^_gat$",
      provider: "google LLC",
      expiration: "1 minute",
      purpose: "Associated with Google Universal Analytics to throttle the request rate - limiting the collection of data on high traffic sites.",
    },
    {
      name: "^_gat$",
      provider: "google LLC",
      expiration: "24 hours",
      purpose: "Associated with Google Universal Analytics to distinguish unique users by assigning a randomly generated number as a client identifier.",
    },
    {
      name: "^_hp2_hld.*",
      provider: "heap Inc",
      expiration: "undefined",
      purpose: "Used to determine which domain a cookie can be set on, since public suffix domains block setting cookies at the top level.",
    },

    {
      name: "^_hp2_hld.*",
      provider: "heap Inc",
      expiration: "24 hours",
      purpose: "Used by Heap Analytics to track user behavior on the website.",
    },
    {
      name: "^cn$",
      provider: "",
      expiration: "undefined",
      purpose: "No Description Available",
    },
    {
      name: "dmn_chk_",
      provider: "",
      expiration: "",
      purpose: "",
    },
  ];


  const [showCookies, setShowCookies] = useState(false);

  const [showCookies2, setShowCookies2] = useState(false);
  const [showCookies3, setShowCookies3] = useState(false);
  const [showCookies4, setShowCookies4] = useState(false);


  const browsers = [
    {
      name: "Chrome",
      link: "https://support.google.com/chrome/answer/95647?hl=en",
    },
    {
      name: "Firefox",
      link: "https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences",
    },
    {
      name: "Opera",
      link: "https://help.opera.com/en/latest/security-and-privacy/",
    },
    {
      name: "Internet Explorer",
      link: "https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies",
    },
    {
      name: "Safari",
      link: "https://support.apple.com/en-il/guide/safari/manage-cookies-and-website-data-sfri11471/mac",
    },
    {
      name: "Edge",
      link: "https://support.microsoft.com/en-us/help/4027947/windows-delete-cookies",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="header ">
          <h2 className="heading">Cookie Policy.</h2>
          <p className="secandheading">Last modified: December 12, 2023</p>
        </div>

        <div className="paragraph">
          <p className="para1">
            We use cookies when you visit our Website to make it work properly,
            to provide the most relevant content to our Website visitors (“{" "}
            <span className="blackContent">user</span> ” or “{" "}
            <span className="blackContent">you</span> ”), as well as for the
            purpose of presenting advertisements. This Cookie Policy (“{" "}
            <span className="blackContent">Cookie Policy</span> ”) is provided
            by us, ScylldaDB Ltd. (“{" "}
            <span className="blackContent">Company</span> ”, “{" "}
            <span className="blackContent">us</span> ” or “{" "}
            <span className="blackContent">our</span> ”) and includes important
            and transparent disclosures regarding the cookies and other tracking
            technologies placed in our Website, as well as related data
            collection practices. This Cookie Policy will detail the type of
            cookies, our third-party partners placing such cookies, information
            regarding their privacy policies and data collection through the
            cookies, as well as your choices and controls. We encourage you to
            read this Cookie Policy carefully prior to accessing or using our
            Website and use it to make informed decisions. This Cookie Policy
            constitutes an integral part of our Privacy Policy and Terms and
            Conditions. Definitions herein shall have the same meaning as
            defined therein.
            <br />
            <br />
            If you have any questions about this Cookie Policy, please contact
            us at:{" "}
            <a className="hyperlink" href="mailto:privacy@ScyllaDBdb.com">
              privacy@ScyllaDB.com
            </a>
            <br />
            <br />
            This Cookie Policy may be updated from time to time and therefore we
            request you to check back periodically to read the most updated
            Cookie Policy. The last and updated version is reflected in the
            “Last Modified” heading above. In the event of a material change we
            will make best efforts to provide a notification through the Website
            or other methods, as and if required under applicable law.
          </p>

          <h2 className="heading2">WHAT IS A COOKIE AND WHY DO WE USE IT?</h2>
          <p className="para1">
            As further described in our{" "}
            <a className="hyperlink" href="/privacy">
              Privacy Policy
            </a>
            , a cookie is a text file that a website – when visited by a user –
            asks your browser to store on your device in order to remember
            information about you. Cookies are then sent back to the originating
            website on each subsequent visit, or to another website that
            recognizes that cookie, to develop a record of the user’s online
            activity. Some of the cookies may expire when the session ends and
            you exit your browser. Other cookies are saved on your computer’s
            hard drive.
            <br /> <br />
            Cookies help us enhance your experience when you are visiting our
            Website. It helps understand how users use the Website and their
            preferences, such as which pages or content are most popular, so
            that we can better provide our Website content as well as for our
            third-party partners to better provide advertisements. The cookies
            may contain a variety of information, such as the Website pages you
            have accessed, advertisements you have interacted with, session
            durations and IP addresses.
            <br /> <br />
            Note that, at any time you are able to change your cookies settings
            through your browser settings to control cookies placement by
            limiting use of cookies on your device, opt out or delete certain
            cookies already stored on your device – all as detailed under the “{" "}
            <span className="blackContent">
              How to Control and Delete Cookies
            </span>{" "}
            ” provision below.
          </p>

          <button className="button" onClick={toggleSidebar}>
            Cookie Preferences
          </button>
          {isOpen && <div className="homeshaddow"> </div> }
          <h2 className="heading3">HOW TO CONTROL AND DELETE COOKIES</h2>
          <p className="para1">
            In addition to the Opt- Out information provided within the cookie
            table above, you may opt-out of the data collection, sharing process
            and advertising services related to cookies, as follows:
            <br /> <br />
            You may set your browser to block all cookies, including cookies
            associated with our Website, or to indicate when a cookie is being
            set, by adjusting the privacy and security settings of your web
            browser. Please refer to the support page of the browser you are
            using. In this regard, following are some links which you may find
            useful:
          </p>

          <table>
            <thead>
              <tr>
                <th>Browser Type</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {browsers.map((browser, index) => (
                <tr key={index}>
                  <td>{browser.name}</td>
                  <td>
                    <a
                      href={browser.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {browser.link}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="para">
            you may opt-out directly from third party retargeting cookies or
            other ad-technology trackers through self-regulator services like
            the Network Advertising Initiative’s (“{" "}
            <span className="blackContent">NAI</span> ”) website –{" "}
            <a className="hyperlink" href="https://optout.networkadvertising.org/?c=1">
              NAI consumer opt-out page
            </a>{" "}
            or the Digital Advertising Alliance’s (“{" "}
            <span className="blackContent">DAA</span> ”) website – <br />{" "}
            <a className="hyperlink" href="https://youradchoices.com/">
              {" "}
              DAA opt-out page
            </a>
            ;
            <br /> <br /> Note that, in the event you disable cookies, some
            features of our website may not operate properly.
          </p>

          <h2 className="heading2">CONTACT US</h2>
          <p className="para1">
            If you have any questions about this Cookie Policy, please contact
            us at:{" "}
            <a className="hyperlink" href="mailto:privacy@ScyllaDBdb.com">
              privacy@ScyllaDBdb.com
            </a>
            .
          </p>
        </div>
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h4>Storage Preferences</h4>
          <button className="close-btn" onClick={toggleSidebar}>
            X
          </button>
        </div>
        <div className="sidebar-para">
          <p>
            When you visit websites, they may store or retrieve data about you
            using cookies and similar technologies (&quot;cookies&quot;). Cookies may be
            necessary for the basic functionality of the website as well as
            other purposes. You have the option of disabling certain types of
            cookies, though doing so may impact your experience on the website.
          </p>
        <div className="container1">
        <div className="sidebar-switch">
            <h5>Essential</h5>
            <div className="toggle-container">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <p>
            Required to enable basic website functionality. You may not disable
            essential cookies.
          </p>

          <div>
            <button
              className="view-cookies-btn"
              onClick={() => setShowCookies(!showCookies)}
            >
              {/* {showCookies ? "Hide Cookies" : "View Cookies"} */} View
              Cookies
            </button>

            {showCookies && (
              <div className="cookies-list">
                {cookiesData.map((cookie, index) => (
                  <div key={index} className="cookie-item">
                    <p>
                      <strong>Name:</strong> {cookie.name}
                    </p>
                    <p>
                      <strong>Provider:</strong> {cookie.provider}
                    </p>
                    <p>
                      <strong>Expiration:</strong> {cookie.expiration}
                    </p>
                    <p>
                      <strong>Purpose:</strong> {cookie.purpose}
                    </p>
                    <hr />
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
         <hr />
        <div className="container2">
        <div className="sidebar-switch">
            <h5>Targeted Advertising</h5>
            <div className="toggle-container">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isChecked2}
                  onChange={handleToggle2}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <p>
          Used to deliver advertising that is more relevant to you and your interests. May also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns. Advertising networks usually place them with the website operator’s permission.
          </p>

          <div>
            <button
              className="view-cookies-btn"
              onClick={() => setShowCookies2(!showCookies2)}
            >
              {/* {showCookies ? "Hide Cookies" : "View Cookies"} */} View
              Cookies
            </button>

            {showCookies2 && (
              <div className="cookies-list">
                {cookiesData2.map((cookie, index) => (
                  <div key={index} className="cookie-item">
                    <p>
                      <strong>Name:</strong> {cookie.name}
                    </p>
                    <p>
                      <strong>Provider:</strong> {cookie.provider}
                    </p>
                    <p>
                      <strong>Expiration:</strong> {cookie.expiration}
                    </p>
                    <p>
                      <strong>Purpose:</strong> {cookie.purpose}
                    </p>
                    <hr />
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
         <hr />

         <div className="container3">
        <div className="sidebar-switch">
            <h5>Personalization</h5>
            <div className="toggle-container">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isChecked3}
                  onChange={handleToggle3}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <p>
          Allow the website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personal features. For example, a website may provide you with local weather reports or traffic news by storing data about your general location.
          </p>

          <div>
            <button
              className="view-cookies-btn"
              onClick={() => setShowCookies3(!showCookies3)}
            >
              {/* {showCookies ? "Hide Cookies" : "View Cookies"} */} View
              Cookies
            </button>

            {showCookies3 && (
              <div className="cookies-list">
                {cookiesData3.map((cookie, index) => (
                  <div key={index} className="cookie-item">
                    <p>
                      <strong>Name:</strong> {cookie.name}
                    </p>
                    <p>
                      <strong>Provider:</strong> {cookie.provider}
                    </p>
                    <p>
                      <strong>Expiration:</strong> {cookie.expiration}
                    </p>
                    <p>
                      <strong>Purpose:</strong> {cookie.purpose}
                    </p>
                    <hr />
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        <hr />
        <div className="container4">
        <div className="sidebar-switch">
            <h5>Analytics</h5>
            <div className="toggle-container">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isChecked4}
                  onChange={handleToggle4}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <p>
          Help the website operator understand how its website performs, how visitors interact with the site, and whether there may be technical issues.
          </p>

          <div>
            <button
              className="view-cookies-btn"
              onClick={() => setShowCookies4(!showCookies4)}
            >
              {/* {showCookies ? "Hide Cookies" : "View Cookies"} */} View
              Cookies
            </button>

            {showCookies4 && (
              <div className="cookies-list">
                {cookiesData4.map((cookie, index) => (
                  <div key={index} className="cookie-item">
                    <p>
                      <strong>Name:</strong> {cookie.name}
                    </p>
                    <p>
                      <strong>Provider:</strong> {cookie.provider}
                    </p>
                    <p>
                      <strong>Expiration:</strong> {cookie.expiration}
                    </p>
                    <p>
                      <strong>Purpose:</strong> {cookie.purpose}
                    </p>
                    <hr />
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

    <hr />
     <div className="saveButton">
      <button>save</button>
      
     </div>
     <a className="Osanolink" href="https://www.osano.com/?utm_campaign=cmp&utm_source=cmp-dialog&utm_medium=drawer">Powered by Osano</a>
       </div>
      </div>
     

    </>
  );
};

export default CookiePolicy;
