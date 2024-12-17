import React from "react";

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        {/* About Section */}
        <h1 className="text-3xl font-bold mb-5">About Me</h1>
        <p>
          Hello, I'm Esmile, a dedicated and versatile Developer passionate about designing and building efficient, scalable, and user-centric web applications. With expertise in modern web technologies and frameworks, I focus on creating seamless digital experiences and robust solutions that drive results.
        </p>
        <br />

        {/* Education Section */}
        <h1 className="text-green-600 font-semibold text-xl">Education & Training</h1>
        <span>
          <ul className="list-disc list-inside">
            <li>
              Master of Computer Applications (MCA) - St. Wilfred's College of Computer Science, Mumbai (Expected: March 2025)
            </li>
            <li>
              Bachelor of Commerce - R.D. National & W.A. Science College, Mumbai (Graduated: April 2022, CGPI: 7.04)
            </li>
            <li>
              Higher Secondary Certificate (HSC) - Rizvi College of Arts, Science And Commerce, Mumbai (Graduated: February 2018, Percentage: 60%)
            </li>
            <li>
              Secondary School Certificate (SSC) - Mother Mary’s English High School, Mumbai (Graduated: March 2015, Percentage: 70%)
            </li>
          </ul>
        </span>
        <br />

        {/* Skills Section */}
        <h1 className="text-green-600 font-semibold text-xl">Skills & Expertise</h1>
        <span>
          <ul className="list-disc list-inside">
            <li>Proficient in: HTML, CSS, JavaScript, React.js</li>
            <li>Experienced with: Tailwind CSS, Bootstrap, GitHub</li>
            <li>Familiar with: Node.js, MongoDB</li>
            <li>Strong understanding of web development principles</li>
            <li>Excellent problem-solving and collaboration skills</li>
          </ul>
        </span>
        <br />

        {/* Mission Statement */}
        <h1 className="text-green-600 font-semibold text-xl">Mission Statement</h1>
        <span>
          My mission is to leverage my skills and creativity to design innovative and impactful web solutions that exceed expectations. I am committed to continuous learning and growth, always seeking opportunities to expand my expertise and contribute to the tech community.
        </span>
      </div>
    </div>
  );
}

export default About;
