import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { getPostBySlug } from '../data/blogPosts';
import BlogPostModal from './BlogPostModal';
import { Container, Reveal, SectionHeader, StoryTitle, buttonClass, sectionPadding } from './ui';

const GlassCard = ({ className = '', children }) => (
  <div className={`rounded-2xl bg-white/[0.04] p-7 ring-1 ring-white/10 ${className}`}>{children}</div>
);

const TabIntro = ({ title, children }) => (
  <div className="mx-auto max-w-3xl text-center">
    <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h3>
    <p className="mt-5 text-lg leading-relaxed text-white/70">{children}</p>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex gap-3 text-white/70">
        <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const inputClass =
  'w-full rounded-xl bg-white/[0.06] px-4 py-3 text-white ring-1 ring-inset ring-white/15 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-400';

const ClicBrainSection = ({ scrollToSection }) => {
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    businessEmail: '',
    linkedinProfile: '',
    name: '',
    surname: '',
    designation: '',
    employeeCount: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const openClicBrainPost = () => {
    const clicBrainPost = getPostBySlug('clicbrain-future-enterprise-intelligence');
    if (clicBrainPost) {
      setSelectedPost(clicBrainPost);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailBody = `
ClicBrain Enterprise Interest Registration

Name: ${formData.name} ${formData.surname}
Business Email: ${formData.businessEmail}
LinkedIn Profile: ${formData.linkedinProfile}
Designation: ${formData.designation}
Number of Employees: ${formData.employeeCount}

Additional Information:
${formData.additionalInfo}

---
Submitted from Clic.World website
Date: ${new Date().toLocaleString()}
      `.trim();

      const subject = encodeURIComponent('ClicBrain Enterprise Interest - ' + formData.name);
      const body = encodeURIComponent(emailBody);
      const mailtoLink = `mailto:ClicBrain@clic.world?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;
      setSubmitMessage('✅ Email client opened! Please send the email to complete your registration.');

      setTimeout(() => {
        setFormData({
          businessEmail: '',
          linkedinProfile: '',
          name: '',
          surname: '',
          designation: '',
          employeeCount: '',
          additionalInfo: ''
        });
        setShowForm(false);
        setSubmitMessage('');
      }, 3000);

    } catch (error) {
      setSubmitMessage('❌ Error opening email client. Please email ClicBrain@clic.world directly.');
    }

    setIsSubmitting(false);
  };

  const tabContent = {
    overview: (
      <div className="space-y-12">
        <TabIntro title="The Future of Enterprise Intelligence">
          ClicBrain represents a fundamental evolution in enterprise knowledge management—an <strong className="font-semibold text-white">AI-native, human-centric intelligence ecosystem</strong> that transforms how organizations create, share, and leverage collective wisdom.
        </TabIntro>

        <div className="grid gap-6 md:grid-cols-3">
          <GlassCard>
            <h4 className="font-display text-lg font-bold text-white">Living Knowledge Objects</h4>
            <p className="mt-3 leading-relaxed text-white/65">Dynamic information that adapts, connects, and flows organically throughout your organization.</p>
          </GlassCard>
          <GlassCard>
            <h4 className="font-display text-lg font-bold text-white">Symbiotic Partnership</h4>
            <p className="mt-3 leading-relaxed text-white/65">True human-AI collaboration that amplifies both capabilities exponentially.</p>
          </GlassCard>
          <GlassCard>
            <h4 className="font-display text-lg font-bold text-white">Free-Flowing Intelligence</h4>
            <p className="mt-3 leading-relaxed text-white/65">Knowledge circulates based on context, need, and serendipitous discovery.</p>
          </GlassCard>
        </div>
      </div>
    ),

    paradigm: (
      <div className="space-y-12">
        <TabIntro title="From Storage to Symbiosis">
          Traditional enterprise systems warehouse information in rigid repositories. ClicBrain creates a living knowledge ecosystem.
        </TabIntro>

        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard className="bg-transparent">
            <h4 className="font-display text-lg font-bold text-white/80">Traditional Approach</h4>
            <div className="mt-5">
              <BulletList
                items={[
                  'Static documents and databases',
                  'Information silos and barriers',
                  'Manual knowledge management',
                  'One-size-fits-all solutions',
                  'Reactive information retrieval'
                ]}
              />
            </div>
          </GlassCard>

          <GlassCard className="bg-brand-500/10 ring-brand-300/30">
            <h4 className="font-display text-lg font-bold text-white">ClicBrain Approach</h4>
            <div className="mt-5">
              <BulletList
                items={[
                  'Intelligent, self-organizing knowledge',
                  'Seamless cross-department flow',
                  'AI-enhanced collaboration',
                  'Contextually adaptive systems',
                  'Predictive knowledge delivery'
                ]}
              />
            </div>
          </GlassCard>
        </div>

        <GlassCard className="sm:p-10">
          <h4 className="font-display text-xl font-bold text-white sm:text-2xl">AI-Native Architecture</h4>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h5 className="font-semibold text-gold-300">Intelligent Knowledge Objects</h5>
              <p className="mt-2 leading-relaxed text-white/65">Self-aware information that understands its own value, context, and connections.</p>
            </div>
            <div>
              <h5 className="font-semibold text-gold-300">Adaptive Pathways</h5>
              <p className="mt-2 leading-relaxed text-white/65">Information routes that evolve based on usage patterns and emerging needs.</p>
            </div>
            <div>
              <h5 className="font-semibold text-gold-300">Contextual Intelligence</h5>
              <p className="mt-2 leading-relaxed text-white/65">Right knowledge, right moment, right people—automatically.</p>
            </div>
            <div>
              <h5 className="font-semibold text-gold-300">Predictive Flows</h5>
              <p className="mt-2 leading-relaxed text-white/65">Anticipates information needs before they're explicitly requested.</p>
            </div>
          </div>
        </GlassCard>
      </div>
    ),

    features: (
      <div className="space-y-12">
        <TabIntro title="Dynamic Knowledge Objects">
          Beyond documents and data—intelligent knowledge that lives, learns, and evolves.
        </TabIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Self-Organization', text: 'Knowledge objects automatically organize based on content, context, and usage patterns.' },
            { title: 'Dynamic Relationships', text: 'Form intelligent connections with other knowledge objects across the organization.' },
            { title: 'Continuous Evolution', text: 'Update and evolve themselves as new information becomes available.' },
            { title: 'Contextual Awareness', text: "Understand when and where they're most valuable to your organization." },
            { title: 'Temporal Sensitivity', text: 'Recognize when they need updates or have become obsolete.' },
            { title: 'Usage Learning', text: "Adapt presentation and accessibility based on how they're used." }
          ].map((item) => (
            <GlassCard key={item.title}>
              <h4 className="font-display text-lg font-bold text-white">{item.title}</h4>
              <p className="mt-3 leading-relaxed text-white/65">{item.text}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    ),

    partnership: (
      <div className="space-y-12">
        <TabIntro title="Symbiotic Human-AI Collaboration">
          Beyond automation to true partnership—where humans and AI create organizational wisdom that exceeds the sum of its parts.
        </TabIntro>

        <GlassCard className="sm:p-10">
          <h4 className="text-center font-display text-xl font-bold text-white sm:text-2xl">The Flow of Symbiotic Intelligence</h4>
          <ol className="mt-10 grid gap-8 md:grid-cols-5 md:gap-4">
            {[
              { step: 1, title: "Human Insight", desc: "Seeds new knowledge creation" },
              { step: 2, title: "AI Amplifies", desc: "Pattern recognition & connections" },
              { step: 3, title: "Self-Organization", desc: "Knowledge objects establish relationships" },
              { step: 4, title: "Collaborative Refinement", desc: "Ongoing human-AI interaction" },
              { step: 5, title: "Organizational Intelligence", desc: "Emerges from collective network" }
            ].map((item, index, steps) => (
              <li key={item.step} className="relative flex gap-4 md:flex-col md:items-center md:gap-0 md:text-center">
                {index < steps.length - 1 && (
                  <span aria-hidden="true" className="absolute left-[calc(50%+1.5rem)] right-[calc(-50%+0.5rem)] top-5 hidden h-px bg-white/15 md:block" />
                )}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-400 font-display text-sm font-bold text-navy-950">
                  {item.step}
                </span>
                <div className="md:mt-4">
                  <div className="font-semibold text-white">{item.title}</div>
                  <div className="mt-1 text-sm text-white/60">{item.desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </GlassCard>

        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <h4 className="font-display text-lg font-bold text-white">Humans Provide</h4>
            <div className="mt-5">
              <BulletList
                items={[
                  'Strategic vision & direction',
                  'Emotional intelligence',
                  'Creative problem-solving',
                  'Ethical judgment & context',
                  'Domain expertise'
                ]}
              />
            </div>
          </GlassCard>

          <GlassCard>
            <h4 className="font-display text-lg font-bold text-white">AI Contributes</h4>
            <div className="mt-5">
              <BulletList
                items={[
                  'Pattern recognition',
                  'Rapid data processing',
                  'Predictive analytics',
                  'Continuous learning',
                  '24/7 availability'
                ]}
              />
            </div>
          </GlassCard>
        </div>
      </div>
    ),

    transformation: (
      <div className="space-y-12">
        <TabIntro title="Organizational Transformation">
          From information repositories to living intelligence ecosystems—where organizations become conscious.
        </TabIntro>

        <GlassCard className="sm:p-10">
          <h4 className="font-display text-xl font-bold text-white sm:text-2xl">The Emergent Intelligence Organization</h4>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <h5 className="mb-5 font-semibold text-gold-300">From Knowledge Workers to Knowledge Partners</h5>
              <BulletList
                items={[
                  'Co-create intelligence with AI systems',
                  'Guide knowledge flows through human insight',
                  'Amplify organizational learning',
                  'Build collective wisdom spanning expertise'
                ]}
              />
            </div>
            <div>
              <h5 className="mb-5 font-semibold text-gold-300">Learning Entities That:</h5>
              <BulletList
                items={[
                  'Adapt based on collective experience',
                  'Anticipate challenges through pattern recognition',
                  'Leverage full spectrum of intelligence',
                  'Create sustainable competitive advantages'
                ]}
              />
            </div>
          </div>
        </GlassCard>

        <div className="mx-auto max-w-3xl text-center">
          <h4 className="font-display text-2xl font-bold text-white sm:text-3xl">The Vision Realized</h4>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            This is not just knowledge management; this is <strong className="font-semibold text-gold-300">organizational consciousness</strong>—the emergence of truly intelligent enterprises that learn, adapt, and thrive in an increasingly complex world.
          </p>
        </div>
      </div>
    )
  };

  return (
    <div className="relative overflow-hidden bg-navy-950 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-brand-500/15 blur-3xl" />
      </div>

      <Container className={`relative ${sectionPadding}`}>
        {/* Header */}
        <Reveal>
          <SectionHeader
            dark
            eyebrow="ClicBrain"
            title={
              <StoryTitle dark onClick={openClicBrainPost}>ClicBrain: Enterprise Intelligence</StoryTitle>
            }
            description="Where knowledge flows freely, AI and humans partner, and organizations become conscious."
          />
        </Reveal>

        {/* Navigation Tabs */}
        <div className="mt-14 flex justify-center">
          <div role="tablist" className="no-scrollbar -mx-5 flex max-w-[calc(100%+2.5rem)] gap-1 overflow-x-auto px-5 sm:mx-0 sm:max-w-full sm:rounded-full sm:bg-white/[0.05] sm:p-1.5 sm:ring-1 sm:ring-white/10">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'paradigm', label: 'Paradigm Revolution' },
              { id: 'features', label: 'Living Knowledge' },
              { id: 'partnership', label: 'Symbiotic AI' },
              { id: 'transformation', label: 'Transformation' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-navy-900'
                    : 'text-white/70 ring-1 ring-white/10 hover:bg-white/10 hover:text-white sm:ring-0'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div role="tabpanel" className="mt-16">
          {tabContent[activeTab]}
        </div>

        {/* Call to Action */}
        <div className="mt-24 lg:mt-28">
          <div className="mx-auto max-w-4xl rounded-[2rem] bg-gradient-to-br from-brand-600/40 to-white/[0.03] p-px">
            <div className="rounded-[calc(2rem-1px)] bg-navy-900/90 px-6 py-12 text-center backdrop-blur sm:px-12 sm:py-14">
              <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to Transform Your Enterprise?
              </h3>
              <p className="mt-3 text-lg text-white/70">Join the AI-Native Intelligence Beta Program</p>

              {!showForm ? (
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setShowForm(true)}
                    className={buttonClass('gold', 'px-7 py-3.5')}
                  >
                    Register your interest for the Beta pilot
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="mt-10 text-left">
                  <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
                    <h4 className="font-display text-xl font-bold text-white sm:text-2xl">Beta Pilot Registration</h4>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      aria-label="Close form"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {submitMessage && (
                    <div className="mb-6 rounded-xl bg-white/10 p-4 text-center text-white">
                      {submitMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-white/80">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className={inputClass}
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-white/80">Surname *</label>
                        <input
                          type="text"
                          name="surname"
                          value={formData.surname}
                          onChange={handleInputChange}
                          required
                          className={inputClass}
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/80">Business Email *</label>
                      <input
                        type="email"
                        name="businessEmail"
                        value={formData.businessEmail}
                        onChange={handleInputChange}
                        required
                        className={inputClass}
                        placeholder="your.email@company.com"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/80">LinkedIn Profile</label>
                      <input
                        type="url"
                        name="linkedinProfile"
                        value={formData.linkedinProfile}
                        onChange={handleInputChange}
                        className={inputClass}
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/80">Designation *</label>
                      <select
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        required
                        className={`${inputClass} [&>option]:text-navy-900`}
                      >
                        <option value="">Select your role</option>
                        <option value="CEO">CEO</option>
                        <option value="CTO">CTO</option>
                        <option value="CFO">CFO</option>
                        <option value="COO">COO</option>
                        <option value="VP">VP</option>
                        <option value="Director">Director</option>
                        <option value="Manager">Manager</option>
                        <option value="Engineer">Engineer</option>
                        <option value="Consultant">Consultant</option>
                        <option value="Founder">Founder</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-medium text-white/80">Number of Employees *</label>
                      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                        {[
                          { value: '1-50', label: '1-50' },
                          { value: '50-100', label: '50-100' },
                          { value: '100-1000', label: '100-1000' },
                          { value: '1000+', label: '1000+' }
                        ].map((option) => (
                          <label
                            key={option.value}
                            className={`flex cursor-pointer items-center gap-2 rounded-xl px-4 py-3 ring-1 ring-inset transition-colors ${
                              formData.employeeCount === option.value
                                ? 'bg-gold-400/10 ring-gold-400'
                                : 'ring-white/15 hover:bg-white/5'
                            }`}
                          >
                            <input
                              type="radio"
                              name="employeeCount"
                              value={option.value}
                              checked={formData.employeeCount === option.value}
                              onChange={handleInputChange}
                              className="accent-gold-400"
                              required
                            />
                            <span className="text-sm text-white/80">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/80">Tell us about your organization and interest *</label>
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        required
                        rows="4"
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us about your organization, current knowledge management challenges, and why you're interested in participating in the ClicBrain beta pilot..."
                      />
                    </div>

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={buttonClass('gold', 'flex-1 py-3.5 disabled:opacity-50')}
                      >
                        {isSubmitting ? 'Submitting...' : 'Register for Beta'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className={buttonClass('ghostDark', 'py-3.5')}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* Blog Post Modal */}
      {isModalOpen && selectedPost && (
        <BlogPostModal
          post={selectedPost}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ClicBrainSection;
