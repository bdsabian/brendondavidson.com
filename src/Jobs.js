import React, { Component } from "react";

import Block from "jsxstyle/Block";
import Col from "jsxstyle/Col";
import Row from "jsxstyle/Row";

import Button from "./components/Button";
import Container from "./components/Container";
import Icon from "./components/Icon";
import SectionHeading from "./components/SectionHeading";
import SectionSubHeading from "./components/SectionSubHeading";

import Job from "./Job";

import theme from "./lib/theme";

const jobs = [
  {
    slug: "gbn",
    company: {
      name: "Gourmet by Numbers"
    },
    years: "June 2015 - June 2016",
    description: `<ul> 
                    <li>Designed, built and maintained internal management tools, client-facing e-commerce website with custom subscription model, as well as mobile web tools for use by kitchen staff on iPads.</li> 
                    <li>Setup and managed all server infrastructure on Heroku and AWS.</li> 
                    <li>Supported customers with technical issues via Intercom and email.</li>
                  </ul>`,
    position: "Senior Web Developer",
    technologies: [
      "PostgreSQL",
      "Heroku",
      "Ruby/Rails",
      "Webpack",
      "SASS/CSS",
      "Babel",
      "Node",
      "Redux",
      "React"
    ]
  },
  {
    slug: "docright",
    company: {
      name: "Docright"
    },
    years: "April 2012 - January 2015",
    description: `<ul> 
                    <li>Developed Docright.com health IT marketplace platform aimed at helping physicians and other healthcare professionals discover the best health IT and more.</li> 
                    <li>Developed health IT event listing platform providing private labeled websites for healthcare organizations to provide easy access to heath IT and related webinars and events for their members.</li> 
                  </ul>`,
    position: "Senior Web Developer",
    technologies: [
      "Ruby/Rails",
      "jQuery",
      "Bootstrap 3",
      "MySQL",
      "Sphinx Search",
      "EngineYard"
    ]
  },
  {
    slug: "dimestore",
    company: {
      name: "KN Dimestore (acquired by GfK)"
    },
    years: "September 2007 - March 2012",
    description: `<ul> 
                    <li>Designed, built, and maintained initial implementation of ad-space-delivered quiz platform.</li> 
                    <li>Worked directly with clients to understand their needs and iterate the product to what eventually became a high-scale platform for measuring online ad engagement.</li> 
                    <li>Hired, trained, and managed development, system admin, and QA teams to continue to scale and maintain the platform.</li>
                  </ul>`,
    position: "Director of Application Development",
    technologies: [
      "Ruby/Rails",
      "ActionScript",
      "Java/J2EE",
      "JSF",
      "Spring",
      "Hibernate",
      "Maven",
      "Apache",
      "Nginx",
      "AppNexus",
      "MySQL",
      "gmond",
      "RRDTool",
      "BIRT"
    ]
  },
  {
    slug: "gametrust",
    company: {
      name: "Game Trust (acquired by Real Networks)"
    },
    years: "January 2006 - September 2007",
    description: `<ul> 
                    <li>Developed J2EE web application for GameFrame online casual gaming platform.</li> 
                    <li>Worked closely with Marketing Department to determine requirements, draft proposal, design and develop a web application to create and manage bracket tournaments for the Game Frame platform.</li> 
                    <li>Built internal PHP-based web applications to help streamline department processes.</li> 
                  </ul>`,
    position: "Software Developer",
    technologies: [
      "J2EE",
      "JSP",
      "JSF",
      "JDBC",
      "ActionScript",
      "MS SQL Server",
      "Apache/Tomcat",
      "PHP"
    ]
  },
  {
    slug: "quickshift",
    company: {
      name: "Quickshift, Inc"
    },
    years: "2004 - 2005",
    description: `<ul> 
                    <li>Developed low-level I/O caching driver and related monitoring software.</li> 
                  </ul>`,
    position: "Software Developer",
    technologies: ["Visual Studio", "ASM", "C# .NET", "C++"]
  }
];

export class Jobs extends Component {
  render() {
    const { id } = this.props;
    return (
      <Block
        props={{ id }}
        backgroundColor={theme.projects.backgroundColor}
        padding="3.5rem 0"
      >
        <Container>
          <SectionHeading>Work History</SectionHeading>
          <SectionSubHeading>
            Check out the projects I've worked on.
          </SectionSubHeading>
          <Col flexWrap="wrap" justifyContent="space-between">
            {jobs.map(job => <Job key={job.slug} data={job} />)}
          </Col>
          <Row flexWrap="wrap" justifyContent="center" paddingTop="2.5rem">
            <Button
              component="a"
              href="downloads/Resume - Brendon Davidson.pdf"
              target="_blank"
              nobg
              borderColor={theme.projects.downloadButton.borderColor}
              textColor={theme.projects.downloadButton.color}
            >
              <Icon
                name="download"
                style={{
                  color: theme.projects.downloadButton.color,
                  marginRight: "0.5rem"
                }}
              />
              {" "}Download My Resume
            </Button>
          </Row>
        </Container>
      </Block>
    );
  }
}

export default Jobs;
