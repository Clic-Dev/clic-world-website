import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 'isiolo-agrimining',
      title: 'Isiolo AgriMining Project',
      description: 'A community development project with gold mining, Moringa and Livestock',
      image: `${process.env.PUBLIC_URL}/project-isiolo.jpg`,
      location: 'Isiolo, Kenya',
      status: 'Ready for Investment'
    },
    {
      id: 'nucare-coffee',
      title: 'NuCare Coffee Project',
      description: 'A women focused coffee cooperative project with Social Banking',
      image: `${process.env.PUBLIC_URL}/project-coffee.jpg`,
      location: 'Kenya',
      status: 'Under Evaluation'
    },
    {
      id: 'owino-market',
      title: 'Owino Market Project',
      description: 'A merchant cooperative project with online marketplace',
      image: `${process.env.PUBLIC_URL}/project-market.jpg`,
      location: 'Kampala, Uganda',
      status: 'Pilot Implementation'
    }
  ];

  const handleProjectAction = (projectTitle, action) => {
    // TODO: Replace with actual functionality
    alert(`${action} for ${projectTitle} - Coming soon!`);
  };

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Community Development Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real projects creating real impact in African communities through 
            collaborative finance and sustainable development initiatives.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden rounded-t-2xl">
                <img 
                  src={`${process.env.PUBLIC_URL}/${index === 0 ? 'Artisanal Miners 02.png' : index === 1 ? 'Coffe Farmers Women 02.png' : 'Owino Market 02.png'}`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  style={index === 1 ? { objectPosition: '50% 30%' } : {}}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl mb-1">
                    {index === 0 ? '⛏️' : index === 1 ? '☕' : '🏪'}
                  </div>
                  <div className="text-sm opacity-90 bg-black bg-opacity-50 px-2 py-1 rounded">{project.location}</div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  {project.title}
                  <span className="ml-2 text-lg">
                    {index === 0 ? '🇰🇪' : index === 1 ? '🇺🇬' : '🇺🇬'}
                  </span>
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  {['Overview', 'Status', 'Investment', 'Updates'].map((action) => (
                    <button
                      key={action}
                      onClick={() => handleProjectAction(project.title, action)}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                        action === 'Investment' 
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : action === 'Status'
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Indicator */}
              <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                <div className="flex items-center justify-center text-sm">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-orange-600 font-medium">{project.status}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Community Development Initiative
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              These projects represent the future of community-owned finance - where local 
              communities control their economic development and share in the wealth they create.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => alert('Investment opportunities - Coming soon!')}
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Investment Opportunities
              </button>
              <button 
                onClick={() => alert('Project submissions - Coming soon!')}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Submit Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;