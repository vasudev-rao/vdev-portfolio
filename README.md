# Vasudev Rao - Portfolio & Technical Blog

Modern, enterprise-grade portfolio and technical blog for a Senior Data Engineer. Built with Next.js 14, TypeScript, Tailwind CSS, and MDX.

![Portfolio Preview](https://via.placeholder.com/1200x600/011F4B/FFFFFF?text=Vasudev+Rao+Portfolio)

## 🌟 Features

- ✨ **Modern Design**: Clean white background with Royal Navy Blue (#011F4B) theme
- 🎨 **Glassy UI**: Translucent blur effects and subtle animations
- 📝 **MDX Blog**: Full-featured technical blog with 5 starter posts
- 🚀 **SEO Optimized**: Perfect metadata, OpenGraph, JSON-LD schema
- 📱 **Fully Responsive**: Mobile-first design approach
- ⚡ **Fast Performance**: Optimized for 95+ Lighthouse score
- 🎯 **Recruiter-Friendly**: Showcases senior-level data engineering expertise
- 🔧 **Production-Ready**: Built with best practices and modern tech stack

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Animations**: Framer Motion
- **Blog**: MDX (Markdown + JSX)
- **Icons**: Lucide React + React Icons

## 📂 Project Structure

```
vasudev-portfolio/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Individual blog post
│   │   └── page.tsx               # Blog listing
│   ├── layout.tsx                 # Root layout with SEO
│   ├── page.tsx                   # Home page
│   └── globals.css                # Global styles
├── components/
│   ├── ui/
│   │   └── button.tsx             # ShadCN UI components
│   ├── Navbar.tsx                 # Glassy sticky navbar
│   ├── Hero.tsx                   # Hero section with skills
│   ├── About.tsx                  # Professional summary
│   ├── Skills.tsx                 # Technology grid
│   ├── Experience.tsx             # Work history
│   ├── Projects.tsx               # Featured projects
│   ├── Contact.tsx                # Contact section
│   └── Footer.tsx                 # Footer
├── content/posts/                 # MDX blog posts
│   ├── delta-lake-lakehouse.mdx
│   ├── snowflake-vs-bigquery-vs-databricks.mdx
│   ├── realtime-system-design.mdx
│   ├── modern-pyspark-pipelines.mdx
│   └── llms-transform-data-engineering.mdx
├── lib/
│   ├── utils.ts                   # Utility functions
│   └── blog.ts                    # Blog post utilities
├── public/                        # Static assets
├── styles/                        # Additional styles
├── tailwind.config.ts             # Tailwind configuration
├── tsconfig.json                  # TypeScript config
├── next.config.js                 # Next.js config
└── package.json                   # Dependencies
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Extract the archive**:
```bash
tar -xzf vasudev-rao-portfolio.tar.gz
cd vasudev-portfolio
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization Guide

### Update Personal Information

#### 1. Hero Section (`components/Hero.tsx`)

```typescript
// Update name and title
<h1>Your Name | Your Title</h1>

// Update skills array
const skills = [
  'Your', 'Tech', 'Stack'
]
```

#### 2. About Section (`components/About.tsx`)

```typescript
// Update professional summary
<p>Your professional summary here...</p>

// Update areas of interest
const interests = [
  'Your Interest 1',
  'Your Interest 2',
]
```

#### 3. Skills Section (`components/Skills.tsx`)

```typescript
// Update skill categories and technologies
const skillCategories = [
  {
    title: 'Your Category',
    skills: ['Tech 1', 'Tech 2']
  }
]
```

#### 4. Experience Section (`components/Experience.tsx`)

```typescript
const experiences = [
  {
    title: 'Your Title',
    company: 'Company Name',
    period: '2020 - Present',
    achievements: [
      'Your achievement 1',
      'Your achievement 2'
    ]
  }
]
```

#### 5. Projects Section (`components/Projects.tsx`)

```typescript
const projects = [
  {
    title: 'Project Name',
    description: 'Description',
    techStack: ['Tech 1', 'Tech 2'],
    github: 'https://github.com/...',
    demo: 'https://...'
  }
]
```

### Update Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  navy: {
    500: '#011F4B',  // Change primary color
  },
  royal: {
    500: '#1F4FFF',  // Change accent color
  }
}
```

### Change Fonts

Edit `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ 
  subsets: ['latin'],
  weight: ['400', '600', '700']
})
```

### Update SEO Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your description',
  // ... update all metadata fields
}
```

## 📚 Blog Management

### Creating New Blog Posts

1. Create a new `.mdx` file in `content/posts/`:

```bash
touch content/posts/your-post-slug.mdx
```

2. Add frontmatter and content:

```mdx
---
title: "Your Post Title"
date: "2026-02-08"
excerpt: "A brief description of your post"
author: "Your Name"
category: "Data Engineering"
tags: ["Tag1", "Tag2", "Tag3"]
readTime: "10 min read"
featured: true
---

## Your Content Here

Write your blog post using Markdown syntax...
```

3. The post will automatically appear on `/blog`

### Blog Categories

Update categories in individual posts:
- Data Engineering
- Cloud
- DevOps
- AI / LLMs
- Python / Spark
- System Design

## 🎨 Styling Guide

### Using Tailwind Classes

```typescript
// Navy blue primary color
className="text-navy-500 bg-navy-50"

// Royal blue accent
className="text-royal-500 bg-royal-50"

// Glassy effect
className="glass" // Pre-defined in globals.css
```

### Adding Animations

```typescript
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

### Deploy to AWS Amplify

1. Connect your Git repository
2. Configure build settings
3. Deploy

## 📊 SEO Features

- ✅ Optimized metadata
- ✅ OpenGraph tags
- ✅ Twitter cards
- ✅ JSON-LD structured data
- ✅ Semantic HTML
- ✅ Sitemap (auto-generated)
- ✅ robots.txt

## 🔧 Performance Optimization

- ✅ Image optimization (Next.js)
- ✅ Code splitting
- ✅ Static generation
- ✅ Dynamic imports
- ✅ Font optimization

## 📱 Responsive Design

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🐛 Troubleshooting

### Blog posts don't appear

- Check `.mdx` files are in `content/posts/`
- Verify frontmatter is correct
- Restart dev server

### Styles not applying

- Run `npm run dev` again
- Clear browser cache
- Check Tailwind configuration

### Build errors

- Run `npm install` to ensure all dependencies
- Check TypeScript errors: `npm run lint`
- Verify all imports are correct

## 📄 License

This project is available for personal and commercial use.

## 👤 Author

**Vasudev Rao**  
Senior Data Engineer | Cloud | AI | Big Data

- GitHub: [@vasudevrao](https://github.com)
- LinkedIn: [Vasudev Rao](https://linkedin.com)
- Email: vasudevrao@email.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- UI components from [ShadCN UI](https://ui.shadcn.com/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

---

**⭐ Star this repo if you found it helpful!**

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
