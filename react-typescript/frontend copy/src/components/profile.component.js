import React from "react";

const SeniorSoftwareDeveloperWebsite = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Your Name
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* About Me */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="mb-4">About Me</h2>
          <p>Your introduction and brief summary of your experience and expertise as a senior software developer.</p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">Skills</h2>
          <div className="row">
            <div className="col-md-4">
              <h4>Frontend</h4>
              <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue.js</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Backend</h4>
              <ul>
                <li>Node.js</li>
                <li>Python (Django, Flask)</li>
                <li>Java (Spring Boot)</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Others</h4>
              <ul>
                <li>Database (SQL, NoSQL)</li>
                <li>DevOps (Docker, Kubernetes)</li>
                <li>Agile Methodologies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="mb-4">Projects</h2>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">Brief description of Project 1.</p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">Brief description of Project 2.</p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">Contact</h2>
          <p>Contact information and a contact form.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col text-center">&copy; 2024 Your Name</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SeniorSoftwareDeveloperWebsite;
