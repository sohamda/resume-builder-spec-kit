/**
 * Resume Data - Edit this file to customize your portfolio
 * Each section can be updated independently
 */

const resumeData = {
  // ===== HERO SECTION =====
  hero: {
    name: 'Your Name',
    title: 'Your Professional Title',
    tagline: 'Transforming ideas into impactful solutions',
    photo: 'assets/images/profile-placeholder.svg',
    cta: {
      text: 'Get in Touch',
      link: '#contact'
    }
  },

  // ===== SOCIAL LINKS =====
  social: [
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: 'fa-brands fa-linkedin', fallback: 'in' },
    { platform: 'GitHub', url: 'https://github.com/yourprofile', icon: 'fa-brands fa-github', fallback: '</>' },
    { platform: 'Twitter', url: 'https://twitter.com/yourprofile', icon: 'fa-brands fa-x-twitter', fallback: 'X' },
    { platform: 'YouTube', url: 'https://youtube.com/@yourchannel', icon: 'fa-brands fa-youtube', fallback: '▶' },
    { platform: 'Medium', url: 'https://medium.com/@yourprofile', icon: 'fa-brands fa-medium', fallback: 'M' },
    { platform: 'Email', url: 'mailto:your.email@example.com', icon: 'fa-solid fa-envelope', fallback: '✉' }
  ],

  // ===== ABOUT ME =====
  about: {
    headline: 'About Me',
    paragraphs: [
      'Write your professional summary here. Describe who you are, what you do, and what drives you professionally.',
      'Add more paragraphs to share your story, your journey, and what makes you unique in your field.',
      'Mention your passions, your approach to work, and what you\'re looking to achieve next.'
    ],
    highlights: [
      { icon: 'fa-solid fa-code', label: 'Years of Experience', value: '10+' },
      { icon: 'fa-solid fa-building', label: 'Companies Worked', value: '5+' },
      { icon: 'fa-solid fa-users', label: 'Teams Led', value: '3+' },
      { icon: 'fa-solid fa-trophy', label: 'Awards', value: '5+' }
    ]
  },

  // ===== TECHNICAL EXPERTISE & CERTIFICATIONS =====
  expertise: {
    headline: 'Technical Expertise',
    categories: [
      {
        name: 'Languages & Frameworks',
        skills: ['JavaScript', 'TypeScript', 'Python', 'React', 'Node.js', 'Vue.js']
      },
      {
        name: 'Cloud & DevOps',
        skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD']
      },
      {
        name: 'Databases & Tools',
        skills: ['PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs', 'Git']
      },
      {
        name: 'Architecture & Practices',
        skills: ['Microservices', 'Event-Driven', 'DDD', 'TDD', 'Agile', 'System Design']
      }
    ],
    certifications: [
      { name: 'AWS Solutions Architect Professional', issuer: 'Amazon Web Services', year: '2024', badge: 'fa-brands fa-aws' },
      { name: 'Certified Kubernetes Administrator', issuer: 'CNCF', year: '2023', badge: 'fa-solid fa-dharmachakra' },
      { name: 'Azure DevOps Engineer Expert', issuer: 'Microsoft', year: '2023', badge: 'fa-brands fa-microsoft' },
      { name: 'Professional Scrum Master I', issuer: 'Scrum.org', year: '2022', badge: 'fa-solid fa-certificate' }
    ]
  },

  // ===== WORK EXPERIENCE =====
  experience: {
    headline: 'Work Experience',
    positions: [
      {
        company: 'Company Name',
        logo: 'assets/images/company-placeholder.svg',
        role: 'Senior Software Engineer',
        period: 'Jan 2022 - Present',
        location: 'San Francisco, CA',
        type: 'Full-time',
        description: 'Brief description of your role and impact at this company.',
        achievements: [
          'Achievement or responsibility #1 with quantifiable impact',
          'Achievement or responsibility #2 with quantifiable impact',
          'Achievement or responsibility #3 with quantifiable impact'
        ],
        technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL']
      },
      {
        company: 'Previous Company',
        logo: 'assets/images/company-placeholder.svg',
        role: 'Software Engineer',
        period: 'Mar 2019 - Dec 2021',
        location: 'New York, NY',
        type: 'Full-time',
        description: 'Brief description of your role and impact at this company.',
        achievements: [
          'Achievement or responsibility #1',
          'Achievement or responsibility #2'
        ],
        technologies: ['Python', 'Django', 'Docker', 'MongoDB']
      },
      {
        company: 'Earlier Company',
        logo: 'assets/images/company-placeholder.svg',
        role: 'Junior Developer',
        period: 'Jun 2017 - Feb 2019',
        location: 'Austin, TX',
        type: 'Full-time',
        description: 'Brief description of your role at this company.',
        achievements: [
          'Achievement or responsibility #1',
          'Achievement or responsibility #2'
        ],
        technologies: ['JavaScript', 'HTML', 'CSS', 'MySQL']
      }
    ]
  },

  // ===== BLOGS & VLOGS =====
  content: {
    headline: 'Blogs & Vlogs',
    description: 'Sharing knowledge through writing and video content',
    blogs: [
      {
        title: 'Blog Post Title',
        platform: 'Medium',
        url: 'https://medium.com/@yourprofile/post',
        date: 'Dec 2025',
        readTime: '5 min read',
        description: 'Brief description of what this blog post covers.'
      },
      {
        title: 'Another Blog Post',
        platform: 'Dev.to',
        url: 'https://dev.to/yourprofile/post',
        date: 'Nov 2025',
        readTime: '8 min read',
        description: 'Brief description of what this blog post covers.'
      }
    ],
    vlogs: [
      {
        title: 'Video Title',
        platform: 'YouTube',
        url: 'https://youtube.com/watch?v=xxxxx',
        thumbnail: 'assets/images/video-placeholder.svg',
        duration: '12:34',
        views: '1.2K',
        description: 'Brief description of what this video covers.'
      },
      {
        title: 'Another Video',
        platform: 'YouTube',
        url: 'https://youtube.com/watch?v=yyyyy',
        thumbnail: 'assets/images/video-placeholder.svg',
        duration: '8:45',
        views: '800',
        description: 'Brief description of what this video covers.'
      }
    ]
  },

  // ===== COMMUNITY ENGAGEMENT =====
  community: {
    headline: 'Community Engagement',
    description: 'Giving back through speaking, reviewing, and volunteering',
    speaking: [
      {
        event: 'Conference Name 2025',
        title: 'Talk Title: Building Scalable Systems',
        location: 'Virtual',
        date: 'Oct 2025',
        url: 'https://conference.com/talk',
        type: 'Conference Talk'
      },
      {
        event: 'Meetup Group',
        title: 'Workshop: Getting Started with Kubernetes',
        location: 'San Francisco, CA',
        date: 'Sep 2025',
        url: '',
        type: 'Workshop'
      }
    ],
    reviewCommittee: [
      {
        organization: 'Conference Name',
        role: 'Technical Program Committee',
        period: '2024 - Present',
        description: 'Review and evaluate technical paper submissions'
      },
      {
        organization: 'Open Source Project',
        role: 'Code Reviewer',
        period: '2023 - Present',
        description: 'Review pull requests and mentor contributors'
      }
    ],
    volunteer: [
      {
        organization: 'Tech Nonprofit',
        role: 'Mentor',
        period: '2022 - Present',
        description: 'Mentor underrepresented individuals in tech'
      },
      {
        organization: 'Code for Community',
        role: 'Volunteer Developer',
        period: '2021 - 2023',
        description: 'Built web applications for local nonprofits'
      }
    ]
  },

  // ===== CONTACT =====
  contact: {
    headline: 'Get in Touch',
    email: 'your.email@example.com',
    message: 'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.',
    availability: 'Currently available for consulting and full-time opportunities'
  },

  // ===== SITE CONFIG =====
  config: {
    siteUrl: 'https://yourusername.github.io/portfolio',
    siteName: 'Your Name - Portfolio',
    siteDescription: 'Professional portfolio showcasing work experience, technical expertise, and community contributions.',
    ogImage: 'assets/images/og-image.svg',
    theme: 'modern'
  }
};

export default resumeData;
