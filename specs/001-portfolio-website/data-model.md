# Data Model: Personal Portfolio Website

**Feature**: 001-portfolio-website  
**Date**: 2026-01-07

## Overview

All resume data is stored in a single JavaScript file (`js/data/resume-data.js`) as a plain object. This enables:
- Easy editing without touching HTML structure
- Separation of content from presentation
- Future extensibility (e.g., fetching from API)

## Entity Definitions

### PersonalInfo

Core identity and contact information displayed in hero and contact sections.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ | Full name (e.g., "Jane Doe") |
| `title` | string | ✅ | Professional title (e.g., "Senior Software Engineer") |
| `summary` | string | ✅ | 1-2 sentence professional summary for hero section |
| `email` | string | ✅ | Contact email address |
| `photo` | string | ✅ | Relative path to profile photo (e.g., "assets/images/profile.webp") |
| `location` | string | ❌ | City, Country (optional, for display only) |
| `socialLinks` | SocialLink[] | ✅ | Array of social media links |

### SocialLink

Individual social media or external link.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `platform` | string | ✅ | Platform name (e.g., "LinkedIn", "GitHub", "Twitter", "Website") |
| `url` | string | ✅ | Full URL to profile |
| `icon` | string | ✅ | FontAwesome class (e.g., "fa-brands fa-linkedin") |
| `fallbackChar` | string | ✅ | Unicode fallback (e.g., "in", "</>", "X", "🌐") |

### Experience

Work history entry. Array ordered by date (most recent first).

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `company` | string | ✅ | Company or organization name |
| `role` | string | ✅ | Job title / position |
| `startDate` | string | ✅ | Start date (e.g., "Jan 2022", "2022-01") |
| `endDate` | string | ✅ | End date or "Present" for current role |
| `bullets` | string[] | ✅ | Array of responsibility/achievement descriptions |
| `visible` | boolean | ❌ | Default visibility; first 2-3 true, rest false (for expand logic) |

### Skill

Individual skill with proficiency rating.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ | Skill name (e.g., "JavaScript", "Project Management") |
| `category` | string | ✅ | Category for grouping (e.g., "Technical", "Soft Skills", "Tools") |
| `rating` | number | ✅ | Proficiency 1-5 (displayed as star rating) |

### Education

Educational background entry.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `institution` | string | ✅ | School/university name |
| `degree` | string | ✅ | Degree type (e.g., "Bachelor of Science", "Certification") |
| `field` | string | ✅ | Field of study (e.g., "Computer Science") |
| `year` | string | ✅ | Graduation year (e.g., "2020") |

### SiteConfig

SEO and site-wide configuration.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `siteUrl` | string | ✅ | Full deployed URL (e.g., "https://username.github.io/portfolio") |
| `ogImage` | string | ✅ | Relative path to OG image (e.g., "assets/images/og-image.png") |
| `twitterHandle` | string | ❌ | Twitter/X handle without @ (optional) |

---

## Complete Schema

```javascript
// js/data/resume-data.js

const resumeData = {
  personal: {
    name: 'Jane Doe',
    title: 'Senior Software Engineer',
    summary: 'Full-stack developer with 8+ years of experience building scalable web applications. Passionate about clean code and user-centric design.',
    email: 'jane.doe@example.com',
    photo: 'assets/images/profile.webp',
    location: 'San Francisco, CA',
    socialLinks: [
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/janedoe',
        icon: 'fa-brands fa-linkedin',
        fallbackChar: 'in'
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/janedoe',
        icon: 'fa-brands fa-github',
        fallbackChar: '</>'
      },
      {
        platform: 'Twitter',
        url: 'https://twitter.com/janedoe',
        icon: 'fa-brands fa-x-twitter',
        fallbackChar: 'X'
      },
      {
        platform: 'Website',
        url: 'https://janedoe.dev',
        icon: 'fa-solid fa-globe',
        fallbackChar: '🌐'
      }
    ]
  },

  experience: [
    {
      company: 'Tech Corp',
      role: 'Senior Software Engineer',
      startDate: 'Jan 2022',
      endDate: 'Present',
      bullets: [
        'Led development of microservices architecture serving 1M+ users',
        'Mentored team of 5 junior developers',
        'Reduced deployment time by 60% through CI/CD improvements'
      ],
      visible: true
    },
    {
      company: 'StartupXYZ',
      role: 'Software Engineer',
      startDate: 'Mar 2019',
      endDate: 'Dec 2021',
      bullets: [
        'Built React-based dashboard for real-time analytics',
        'Implemented RESTful APIs with Node.js and PostgreSQL'
      ],
      visible: true
    },
    {
      company: 'Agency Inc',
      role: 'Junior Developer',
      startDate: 'Jun 2017',
      endDate: 'Feb 2019',
      bullets: [
        'Developed responsive websites for 20+ clients',
        'Collaborated with design team on UI/UX improvements'
      ],
      visible: false  // Hidden initially, shown on "View More"
    }
  ],

  skills: [
    { name: 'JavaScript', category: 'Technical', rating: 5 },
    { name: 'TypeScript', category: 'Technical', rating: 4 },
    { name: 'React', category: 'Technical', rating: 5 },
    { name: 'Node.js', category: 'Technical', rating: 4 },
    { name: 'Python', category: 'Technical', rating: 3 },
    { name: 'SQL', category: 'Technical', rating: 4 },
    { name: 'Git', category: 'Tools', rating: 5 },
    { name: 'Docker', category: 'Tools', rating: 3 },
    { name: 'AWS', category: 'Tools', rating: 3 },
    { name: 'Communication', category: 'Soft Skills', rating: 5 },
    { name: 'Leadership', category: 'Soft Skills', rating: 4 },
    { name: 'Problem Solving', category: 'Soft Skills', rating: 5 }
  ],

  education: [
    {
      institution: 'State University',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      year: '2017'
    },
    {
      institution: 'Online Academy',
      degree: 'Professional Certificate',
      field: 'Cloud Architecture',
      year: '2021'
    }
  ],

  config: {
    siteUrl: 'https://janedoe.github.io/portfolio',
    ogImage: 'assets/images/og-image.png',
    twitterHandle: 'janedoe'
  }
};

// Export for use in other modules
export default resumeData;
```

---

## Rendering Logic Notes

### Experience "View More" Toggle

```javascript
// Initial render: show only items where visible === true
// After "View More" click: show all items
// Button text toggles: "View More" ↔ "Show Less"
```

### Skills Star Rating

```javascript
// rating: 4 renders as: ★★★★☆
// Use filled star (fa-solid fa-star) for rating count
// Use empty star (fa-regular fa-star) for remainder (5 - rating)
```

### Skill Categories

Group skills by `category` field and render as separate subsections:
- Technical
- Tools  
- Soft Skills

---

## Validation Rules

| Entity | Rule |
|--------|------|
| `personal.email` | Must be valid email format |
| `personal.photo` | Must be relative path, file must exist |
| `experience[].startDate` | Must be parseable date or "MMM YYYY" format |
| `skills[].rating` | Must be integer 1-5 |
| `socialLinks[].url` | Must be valid URL starting with https:// |

**Note**: Validation is advisory for content authors. No runtime validation in MVP (per YAGNI principle).
