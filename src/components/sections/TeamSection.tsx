'use client'

import { ScrollSection } from '@/components/ui/ScrollSection'
import { Linkedin } from 'lucide-react'
import { useState } from 'react'

const cardBase =
  'h-full rounded-2xl border border-slate-200 dark:border-white/15 bg-white/90 dark:bg-white/[0.06] backdrop-blur-xl shadow-sm dark:shadow-none overflow-hidden'

const team = [
  {
    name: 'Mark',
    title: 'Chief Executive Officer',
    image: 'M',
    bio: 'Visionary leader with 15+ years in AI and enterprise transformation',
    expertise: ['Strategic Planning', 'AI Innovation', 'Business Growth'],
    linkedin: '#',
  },
  {
    name: 'Rick',
    title: 'Chief Technology Officer',
    image: 'R',
    bio: 'Technology architect specializing in scalable AI systems',
    expertise: ['System Architecture', 'AI/ML', 'Cloud Infrastructure'],
    linkedin: '#',
  },
  {
    name: 'Kevin',
    title: 'VP of Engineering',
    image: 'K',
    bio: 'Engineering expert driving innovation and technical excellence',
    expertise: ['Team Leadership', 'Product Development', 'DevOps'],
    linkedin: '#',
  },
  {
    name: 'Amit',
    title: 'Head of AI Research',
    image: 'A',
    bio: 'AI researcher pushing boundaries of machine learning',
    expertise: ['Machine Learning', 'NLP', 'Computer Vision'],
    linkedin: '#',
  },
]

export function TeamSection() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  return (
    <ScrollSection
      id="team"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-[#0A0F1C] dark:via-[#0B1324] dark:to-[#0D1526]" />
      <div className="absolute inset-0 bg-grid opacity-10 dark:opacity-15" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-slate-900 dark:text-white">
            <span className="gradient-text">Meet the Visionaries</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            World-class team combining deep technical expertise with business acumen
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {team.map((member, index) => {
            const isFlipped = flippedCard === index
            return (
              <div
                key={index}
                className="relative h-80 md:h-96 cursor-pointer"
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
                onClick={() => setFlippedCard(isFlipped ? null : index)}
                aria-label={`Learn more about ${member.name}`}
              >
                {/* Front */}
                <div
                  className={`${cardBase} absolute inset-0 flex flex-col items-center text-center p-6 transition-opacity duration-300 ${
                    isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-cyan-500/25">
                      {member.image}
                    </div>
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-cyan-600 dark:text-cyan-400 text-sm mb-3">{member.title}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      Tap or hover to learn more
                    </p>
                  </div>
                </div>

                {/* Back */}
                <div
                  className={`${cardBase} absolute inset-0 flex flex-col p-6 transition-opacity duration-300 ${
                    isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {member.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-400/20 px-2 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a
                    href={member.linkedin}
                    className="flex items-center justify-center gap-2 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-2 border-t border-slate-100 dark:border-white/10 text-sm mt-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin className="w-4 h-4" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </ScrollSection>
  )
}
