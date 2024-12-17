import React from 'react'

function Skills() {
    return (
      <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Skill Card 1 - HTML */}
          <div className="card p-5 shadow-lg rounded-lg hover:scale-105 hover:bg-gray-100 transition transform duration-300">
            <img src="html.png" alt="HTML" className="w-16 h-16 mx-auto mb-4"/>
            <h2 className="text-lg font-semibold text-center">HTML</h2>
          </div>
  
          {/* Skill Card 2 - CSS */}
          <div className="card p-5 shadow-lg rounded-lg hover:scale-105 hover:bg-gray-100 transition transform duration-300">
            <img src="css.png" alt="CSS" className="w-16 h-16 mx-auto mb-4"/>
            <h2 className="text-lg font-semibold text-center">CSS</h2>
          </div>
  
          {/* Skill Card 3 - JavaScript */}
          <div className="card p-5 shadow-lg rounded-lg hover:scale-105 hover:bg-gray-100 transition transform duration-300">
            <img src="/javascript.png" alt="JavaScript" className="w-16 h-16 mx-auto mb-4"/>
            <h2 className="text-lg font-semibold text-center">JavaScript</h2>
          </div>
  
          {/* Skill Card 4 - React */}
          <div className="card p-5 shadow-lg rounded-lg hover:scale-105 hover:bg-gray-100 transition transform duration-300">
            <img src="react.png" alt="React.js" className="w-16 h-16 mx-auto mb-4"/>
            <h2 className="text-lg font-semibold text-center">React.js</h2>
          </div>
  
          {/* Skill Card 5 - MongoDB */}
          <div className="card p-5 shadow-lg rounded-lg hover:scale-105 hover:bg-gray-100 transition transform duration-300">
            <img src="mongodb.webp" alt="MongoDB" className="w-16 h-16 mx-auto mb-4"/>
            <h2 className="text-lg font-semibold text-center">MongoDB</h2>
          </div>
  
          {/* Skill Card 6 - Node.js */}
          <div className="card p-5 shadow-lg rounded-lg hover:scale-105 hover:bg-gray-100 transition transform duration-300">
            <img src="node.png" alt="Node.js" className="w-16 h-16 mx-auto mb-4"/>
            <h2 className="text-lg font-semibold text-center">Node.js</h2>
          </div>
  
          {/* Skill Card 7 - Express */}
          <div className="card p-5 shadow-lg rounded-lg hover:scale-105 hover:bg-gray-100 transition transform duration-300">
            <img src="express.png" alt="Express.js" className="w-16 h-16 mx-auto mb-4"/>
            <h2 className="text-lg font-semibold text-center">Express.js</h2>
          </div>
  
          {/* Skill Card 8 - Tailwind CSS */}
          <div className="card p-5 shadow-lg rounded-lg hover:scale-105 hover:bg-gray-100 transition transform duration-300">
            <img src="tailwind.png" alt="Tailwind CSS" className="w-16 h-16 mx-auto mb-4"/>
            <h2 className="text-lg font-semibold text-center">Tailwind CSS</h2>
          </div>
  
          {/* Skill Card 9 - Bootstrap */}
          <div className="card p-5 shadow-lg rounded-lg hover:scale-105 hover:bg-gray-100 transition transform duration-300">
            <img src="bootstrap.png" alt="Bootstrap" className="w-16 h-16 mx-auto mb-4"/>
            <h2 className="text-lg font-semibold text-center">Bootstrap</h2>
          </div>
  
          {/* Skill Card 10 - PHP */}
          <div className="card p-5 shadow-lg rounded-lg hover:scale-105 hover:bg-gray-100 transition transform duration-300">
            <img src="php.png" alt="PHP" className="w-16 h-16 mx-auto mb-4"/>
            <h2 className="text-lg font-semibold text-center">PHP</h2>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skills;
  