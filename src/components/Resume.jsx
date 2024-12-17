import React from 'react'

function Resume() {
    return (
      <div className="text-center my-10">
        <a
          href="esmile.pdf"
          download
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Download My Resume
        </a>
      </div>
    );
  }
  
  export default Resume;
  