import React from "react";
import Head from "next/head";
import Link from "next/link";
import Emoji from "../components/Emoji"

import { Container, Nav, NavItem } from "reactstrap";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps({ req }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { children } = this.props;
    return (    
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <script src="https://js.stripe.com/v3" />
        </Head>
        <header>
          <style jsx>
            {`
              a {
                color: white;
              }
              .navbar {
                min-height: 80px;
              }
              .nav-link{
                font-size: 18px !important;
              }
              
              .navbar-brand {
                font-size: 28px !important;
                font-weight: bold;
                padding: 0px;
                height: 80px;
                line-height: 80px;
              }
              
              .navbar-toggle {
                /* (80px - button height 34px) / 2 = 23px */
                margin-top: 23px;
                padding: 9px 10px !important;
              }
              
              @media (min-width: 768px) {
                .navbar-nav > li > a {
                  /* (80px - line-height of 27px) / 2 = 26.5px */
                  padding-top: 26.5px;
                  padding-bottom: 26.5px;
                  line-height: 27px;
                }
            `}
          </style>
          <Nav className="navbar navbar-dark bg-dark">
            <div className = "container">
            <NavItem>
              <Link href="/">
                <a className="navbar-brand">
                    <Emoji symbol="🥟" label="dumpling"/>
                momoATL</a>
              </Link>
            </NavItem>

            <NavItem className="ml-auto">
              <Link href="/signin">
                <a className="nav-link">Sign In</a>
              </Link>
            </NavItem>

            {/* <NavItem>
              <Link href="/signup">
                <a className="nav-link"> Sign Up</a>
              </Link>
            </NavItem> */}
            </div>
          </Nav>
        </header>
        <Container>{children}</Container>
      </div>
    );
  }
}

export default Layout;