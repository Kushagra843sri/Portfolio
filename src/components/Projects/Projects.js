import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/pizza.jpg";
import emotion from "../../Assets/Projects/loan.jpg";
import editor from "../../Assets/Projects/population.jpg";
import movie from "../../Assets/Projects/Movie.jpg";
import suicide from "../../Assets/Projects/TrekTribe.jpg";
import bitsOfCode from "../../Assets/Projects/analyzer.jpg";

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
              imgPath={movie}
              isBlog={false}
              title="Movie-Recommendation-System"
              description="This movie recommendation system designed to help users discover films they're likely to enjoy based on their preferences and viewing history. The system leverages machine learning algorithms to analyze user behavior, movie characteristics, and historical data to generate personalized recommendations."
              ghLink="https://github.com/Kushagra843sri/Movie-Recommendation-System"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="WhatsApp-Chat-Analyzer"
              description="WhatsApp Chat Analyzer is a data analysis tool designed to extract insights from WhatsApp conversation exports. This project likely uses Python to process and analyze chat data, providing users with valuable statistics and visualizations about their messaging habits.
              Key features includes Message frequency analysis, User participation metrics, Most used words or emojis, Time-based patterns"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // umya-jit.techdemoLink="https://blogs.so/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Population Dashboard"
              description="The Population Dashboard of USA is an interactive web application that visualizes demographic data for the United States. This project leverages the power of Streamlit, a popular Python library for creating data applications, to build an intuitive and responsive user interface. Key features include Built with Streamlit: Utilizes Streamlit's efficient framework for rapidly developing data-centric web applications, Interactive visualizations, Data exploration"
              ghLink="https://github.com/Kushagra843sri/Population-Dashboard"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Pizza-Sales-Analysis"
              description="This project utilizes MySQL to analyze sales data from a pizza restaurant, providing valuable insights into business performance and customer preferences. Key features include Database Design using MySQL database schema to store information on pizza orders, types, sizes, and sales, Developed a series of SQL queries to extract meaningful information, Calculated important business metrics like total revenue, average order value, and sales growth"
              ghLink="https://github.com/Kushagra843sri/Pizza-Sales-MYSQL"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="TrekTribe"
              description="TrekTribe is an immersive fullstack web application designed to bring adventurers together by providing a platform for exploring, planning, and sharing trekking experiences, while also offering a unique feature for users to host their homes as hotels in various areas. TrekTribe leverages HTML, CSS, JavaScript, Node.js, Express, and MongoDB to deliver a seamless and interactive user experience. The platform features secure user authentication and profiles, allowing adventurers to create and manage personalized profiles."
              ghLink="https://github.com/Kushagra843sri/TrekTribe"
              demoLink="https://trektribe.onrender.com" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Loan-Eligibility-Prediction"
              description=" Loan eligibility prediction model using machine learning techniques, specifically Naive Bayes and Decision Tree algorithms. By comparing the accuracy of both models, I assessed their performance in predicting whether a customer would be eligible for a loan based on historical data. This project not only honed my skills in machine learning and data analysis but also provided valuable insights into selecting appropriate models for real-world applications"
              ghLink="https://github.com/Kushagra843sri/Loan-Eligibility-Prediction"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;