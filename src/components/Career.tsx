import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor</h4>
                <h5>CapCut Freelance</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Created engaging short videos and reels for social media (education, motivation, product promotions).
              Managed full video editing workflow: footage import, trimming, color correction, text animation, audio integration, and export (1080p/4K).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Microsoft Power Apps (Model-Driven)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed applications using low-code/no-code platforms. Worked with data connections, forms, and workflows to streamline business processes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Personal Portfolio Website</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a responsive website using HTML, CSS, and JavaScript. Implemented a navigation menu, contact form, and mobile-friendly design. Focused on performance and user-friendly experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
