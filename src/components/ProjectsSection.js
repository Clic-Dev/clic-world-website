import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Container, Reveal, SectionHeader, buttonClass, sectionPadding } from './ui';

const ProjectsSection = () => {
  const projects = [
    {
      id: 'isiolo-agrimining',
      title: 'Isiolo AgriMining Project',
      description: 'A community development project with gold mining, Moringa and Livestock',
      image: `${process.env.PUBLIC_URL}/Artisanal Miners 02.png`,
      location: 'Isiolo, Kenya',
      status: 'Ready for Investment'
    },
    {
      id: 'nucare-coffee',
      title: 'NewCares Coffee Project',
      description: 'A women focused coffee cooperative project with Social Banking',
      image: `${process.env.PUBLIC_URL}/Coffe Farmers Women 02.png`,
      imagePosition: '50% 30%',
      location: 'Kenya',
      status: 'Under Evaluation'
    },
    {
      id: 'owino-market',
      title: 'Owino Market Project',
      description: 'A merchant cooperative project with online marketplace',
      image: `${process.env.PUBLIC_URL}/Owino Market 02.png`,
      location: 'Kampala, Uganda',
      status: 'Pilot Implementation'
    }
  ];

  const handleProjectAction = (projectTitle, action) => {
    // TODO: Replace with actual functionality
    alert(`${action} for ${projectTitle} - Coming soon!`);
  };

  return (
    <div className="bg-white">
      <Container className={sectionPadding}>
        {/* Section Header */}
        <Reveal>
          <SectionHeader
            eyebrow="Projects"
            title="Community Development Projects"
            description="Real projects creating real impact in African communities through collaborative finance and sustainable development initiatives."
          />
        </Reveal>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.08}
              className="flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200/80"
            >
              {/* Project Image */}
              {/* 16:10 crop also hides the white letterbox bands baked into the miners photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-navy-900 shadow-sm">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-gold-500" />
                  {project.status}
                </span>
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                  <MapPin aria-hidden="true" className="h-4 w-4" />
                  {project.location}
                </span>
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-xl font-bold text-navy-900">{project.title}</h3>
                <p className="mt-3 flex-grow leading-relaxed text-slate-600">{project.description}</p>

                {/* Action Buttons */}
                <div className="mt-8 border-t border-slate-100 pt-6">
                  <button
                    type="button"
                    onClick={() => handleProjectAction(project.title, 'Investment')}
                    className={buttonClass('navy', 'w-full')}
                  >
                    Investment
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </button>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {['Overview', 'Status', 'Updates'].map((action) => (
                      <button
                        key={action}
                        type="button"
                        onClick={() => handleProjectAction(project.title, action)}
                        className="rounded-full px-2 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-paper hover:text-navy-900"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Call to Action */}
        <Reveal className="mt-20 lg:mt-24">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 to-navy-900 px-6 py-14 text-center text-white sm:px-12 lg:py-16">
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
            <h3 className="relative font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Join Our Community Development Initiative
            </h3>
            <p className="relative mx-auto mt-5 max-w-2xl leading-relaxed text-white/75">
              These projects represent the future of community-owned finance - where local
              communities control their economic development and share in the wealth they create.
            </p>
            <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <button
                type="button"
                onClick={() => alert('Investment opportunities - Coming soon!')}
                className={buttonClass('gold')}
              >
                Explore Investment Opportunities
              </button>
              <button
                type="button"
                onClick={() => alert('Project submissions - Coming soon!')}
                className={buttonClass('ghostDark')}
              >
                Submit Your Project
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
};

export default ProjectsSection;
