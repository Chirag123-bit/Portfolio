import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bitsOfCode from "../../Assets/Projects/blog.png";
import chatify from "../../Assets/Projects/chatify.png";
import editor from "../../Assets/Projects/codeEditor.png";
import emotion from "../../Assets/Projects/emotion.png";
import leaf from "../../Assets/Projects/leaf.png";
import suicide from "../../Assets/Projects/suicide.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="La Cinephile"
              description="We have all been in a situation where we must stand in a long queue to buy movie tickets. Have you ever been in the queue for hours, only to realize that they’ve run out of tickets? Don’t worry, La CinePhile is here to solve this problem! La CinePhile is a movie ticket registration site for a movie theater built using HTML, CSS, JavaScript, Ajax, and Bootstrap. Through this website, users will be able to book or buy tickets online. Unlike LaCinephile, most ticket registration systems you see online are crowded with unnecessary details, users may feel uneasiness to navigate those sites."
              ghLink="https://github.com/Chirag123-bit/La-Cinephile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="HireHub"
              description="HireHub is the job platform with the target of simplifying recruiting and hiring process for the parties involved. With this application, employers, and potential employees could connect directly, efficiently cutting out the middleman. Moreover, with a real-time communication system integrated into this platform, employers can be confident about their applicants. In the favor of applicants, HireHub offers total transparency in their application process by informing them about state of their application The process of searching jobs remains one of the most hassled tasks "
              ghLink="https://github.com/Chirag123-bit/Hire_Hub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="HireHub App"
              description="The application will consist of two users: Applicant, Employer and Admin. Although the admin dashboard will only be accessible through web platform, it will be able to manage all the users as well as the overall systems in this application. Speaking of Applicants, they will be able to view the jobs posted by several companies (Employers). Through this platform, the users will be allowed to browse, filter, and apply for the job that best suits their interests. The filter option will allow the users to narrow down the search to the post that best match their skill set or interests"
              ghLink="https://github.com/Chirag123-bit/HireHubApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Megaplex"
              description="Megaplex is a C2C (Customer to Customer) second-hand marketplace where customers can easily sell unused, old, or new products. The platform solves the problem of going to a store and buying things at ridiculous prices and encourages customers to purchase things at affordable prices."
              ghLink="https://github.com/HMV2/Megaplex"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="School Management System"
              description="This is a simple tkinter python-based application. This program can be used to digitally maintain student records. For storage, MySql is used and remaining backend operations are performed through core python features."
              ghLink="https://github.com/Chirag123-bit/School-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Covid Contact Trace Management"
              description="This program makes use of text files for storing data. Covid pateint and contact suspects register themselves into the system and then the admin marks those two person as contact. An adjacency matrix is used to track contacts. One(1) on adjacency matrix denotes connection. Finally 'jung' library is used to represent that graph in visual form."
              ghLink="https://github.com/Chirag123-bit/CovidContactTraceManagement"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
