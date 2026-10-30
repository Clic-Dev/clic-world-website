import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { blogPosts, getFeaturedPosts, getAllCategories } from '../data/blogPosts';
import BlogPostModal from './BlogPostModal';
import { Container, Reveal, SectionHeader, buttonClass, sectionPadding } from './ui';

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Featured Stories');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categories = ['Featured Stories', 'All', ...getAllCategories()];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : selectedCategory === 'Featured Stories'
    ? getFeaturedPosts().slice(0, 3)
    : blogPosts.filter(post => post.category === selectedCategory);

  const openPost = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className="bg-paper">
      <Container className={sectionPadding}>
        {/* Section Header */}
        <Reveal>
          <SectionHeader
            eyebrow="Blog"
            title="Movement Insights"
            description="Thoughts, breakthroughs, and stories from the front lines of the financial revolution. Where community ownership meets cutting-edge innovation."
          />
        </Reveal>

        {/* Category Filter */}
        <div className="no-scrollbar -mx-5 mt-12 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
              className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-slate-600 ring-1 ring-inset ring-slate-200 hover:text-navy-900 hover:ring-slate-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* All Posts Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200/70 transition-shadow hover:shadow-[0_20px_40px_-24px_rgba(6,15,36,0.35)]"
            >
              <div className="relative h-44 overflow-hidden bg-navy-900">
                {post.image && (
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover opacity-30 mix-blend-luminosity transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600/50 to-navy-950/40" />
                <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-lg font-bold leading-snug text-navy-900 line-clamp-2">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto pt-6">
                  <div className="flex items-center justify-between gap-4 text-xs text-slate-500">
                    <span className="truncate">{post.author}</span>
                    <span className="shrink-0">{post.readTime}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs text-slate-500">{new Date(post.date).toLocaleDateString()}</span>
                    <button
                      type="button"
                      onClick={() => openPost(post)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-800"
                    >
                      Read More
                      <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <Reveal className="mt-20 lg:mt-24">
          <div className="flex flex-col gap-8 rounded-[2rem] bg-white px-6 py-12 ring-1 ring-slate-200/70 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-16">
            <div className="max-w-2xl">
              <h3 className="font-display text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">Join the Conversation</h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Have insights to share? Questions about the movement? Connect with our global community
                of changemakers building the future of finance.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <button type="button" className={buttonClass('navy')}>
                Submit Your Story
              </button>
              <button type="button" className={buttonClass('ghost')}>
                Subscribe to Updates
              </button>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Blog Post Modal */}
      <BlogPostModal
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default BlogSection;
