import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="bg-gray-200 body-font">
        <div className="bg-gray-200 container px-5 py-24 mx-auto" style={{}}>
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                <b>Quick Links</b>
              </h2>{" "}
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="/login/?redirect=Dashboard"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Dashboard
                  </a>{" "}
                </li>{" "}
                
                <li>
                  <a
                    href="mailto:support@stackflare.net"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Contact us
                  </a>{" "}
                </li>{" "}
                <li>
                  <a
                    href="/about-us"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    About us
                  </a>{" "}
                </li>{" "}
                <li>
                  <a href="/blog" className="text-gray-600 hover:text-gray-800">
                    Blog
                  </a>{" "}
                </li>{" "}
              </nav>{" "}
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                <b> Reach Out</b>
              </h2>{" "}
              <nav className="list-none mb-10">
                <li className="email-link">
                  <i className="far fa-envelope" aria-hidden="true" />{" "}
                  <a
                    href="mailto:support@stackflare.net"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    support@stackflare.net
                  </a>
                  <br />
                  <br />
                  <div className="leading-relaxed text-gray-600">
                    <i className="fas fa-map-marker-alt" aria-hidden="true" />{" "}
                    39, Sector Rd Block D, South City I,
                    <br />
                    Gurugram, Haryana 122003 INDIA
                  </div>
                  <a className="text-gray-600 hover:text-gray-800" />{" "}
                </li>{" "}
              </nav>
            </div>{" "}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                <b>Dashboard</b>
              </h2>{" "}
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="/login"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    My Account
                  </a>{" "}
                </li>{" "}
                <li>
                  <Link href="/contact">
                    <a className="text-gray-600 hover:text-gray-800">
                      Create a Account
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    href="/login?redirect=serverstatus"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Server Status
                  </a>{" "}
                </li>
              </nav>{" "}
              <br />
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                <b> Support </b>
              </h2>{" "}
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="/login?redirect=ticket"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Open a Ticket
                  </a>{" "}
                </li>
                <li>
                  <Link href="/contact">
                    <a className="text-gray-600 hover:text-gray-800">
                      Report a Abuse
                    </a>
                  </Link>
                </li>
              </nav>
            </div>{" "}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                <b>Legal Terms</b>
              </h2>{" "}
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="/legal/tos"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Terms of Service
                  </a>{" "}
                </li>{" "}
                <li>
                  <a
                    href="/legal/aup"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Acceptable Use Policy
                  </a>{" "}
                </li>{" "}
                <li>
                  <a
                    href="/legal/Privacy-Policy"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Privacy Policy
                  </a>{" "}
                </li>{" "}
                <li>
                  <a
                    href="/legal/Refund-Policy"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Refund Policy
                  </a>{" "}
                </li>{" "}
              </nav>{" "}
            </div>{" "}

              
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                <b>We Accept</b>
              </h2>{" "}
              <i
                className="fab fa-cc-visa"
                style={{ fontSize: 28, color: "grey" }}
              />{" "}
              <i
                className="fab fa-cc-amex"
                style={{ fontSize: 28, color: "grey" }}
              />{" "}
              <i
                className="fab fa-cc-mastercard"
                style={{ fontSize: 28, color: "grey" }}
              />{" "}
              <i
                className="fab fa-cc-paypal"
                style={{ fontSize: 28, color: "grey" }}
              />{" "}
              <i
                className="fab fa-cc-stripe"
                style={{ fontSize: 28, color: "grey" }}
              />{" "}
              <i
                className="fab fa-google-wallet"
                style={{ fontSize: 28, color: "grey" }}
              />{" "}
              <i
                className="fab fa-btc"
                style={{ fontSize: 28, color: "grey" }}
                aria-hidden="true"
              />{" "}
              <br />
              <br />
              <br />
              <a href="https:www.trustpilot.com/review/stackflare.net">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  <b>Rating</b>
                </h2>
                <i className="fa fa-star" style={{ color: "grey" }} />
                <i className="fa fa-star" style={{ color: "grey" }} />
                <i className="fa fa-star" style={{ color: "grey" }} />
                <i className="fa fa-star" style={{ color: "grey" }} />
                <i className="fa fa-star-half-alt" style={{ color: "grey" }} />
              </a>
            </div>{" "}
          </div>
        </div>
        <div className="bg-gray-300">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-600 sm:ml-6 sm:mt-0 mt-4">
              © 2018-2022 StackFlare.{" "}
              <a
                href=""
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
              >
                All Rights Reserved.
              </a>
            </p>
            &nbsp;{" "}
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                href="https:www.facebook.com/stackflare.net/"
                className="text-gray-500"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />{" "}
                </svg>{" "}
              </a>{" "}
              <a
                href="https:twitter.com/StackflareNET"
                className="ml-3 text-gray-500"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />{" "}
                </svg>{" "}
              </a>{" "}
              <a
                href="https:www.instagram.com/stackflare_hosting/"
                className="ml-3 text-gray-500"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />{" "}
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />{" "}
                </svg>{" "}
              </a>{" "}
              <a
                href="https:www.linkedin.com/company/stackflare/"
                className="ml-3 text-gray-500"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />{" "}
                  <circle cx={4} cy={4} r={2} stroke="none" />{" "}
                </svg>{" "}
              </a>{" "}
            </span>{" "}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
