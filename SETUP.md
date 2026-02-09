# Quick Setup Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- Framer Motion
- MDX support
- ShadCN UI components

### Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Customize Content

1. **Update Personal Info**: Edit components in `/components` folder
2. **Add Blog Posts**: Create `.mdx` files in `/content/posts`
3. **Modify Styles**: Edit `tailwind.config.ts` for colors/fonts
4. **Update SEO**: Edit metadata in `app/layout.tsx`

## 📝 Key Files to Customize

### Must Update
- `components/Hero.tsx` - Name, title, skills
- `components/About.tsx` - Professional summary
- `components/Experience.tsx` - Work history
- `components/Projects.tsx` - Your projects
- `app/layout.tsx` - SEO metadata

### Optional
- `components/Skills.tsx` - Technology stack
- `components/Contact.tsx` - Contact links
- `tailwind.config.ts` - Theme colors
- `content/posts/*.mdx` - Blog posts

## 🎨 Theme Customization

Current theme: **White background + Royal Navy Blue (#011F4B)**

To change colors, edit `tailwind.config.ts`:

```typescript
colors: {
  navy: {
    500: '#YOUR_PRIMARY_COLOR',
  },
  royal: {
    500: '#YOUR_ACCENT_COLOR',
  }
}
```

## 📁 Project Sections

The website includes these sections (in order):

1. **Hero** - Name, title, skills badges, CTA buttons
2. **About** - Professional summary, areas of interest
3. **Skills** - Technology grid by category
4. **Experience** - Work history with achievements
5. **Projects** - Featured projects with tech stacks
6. **Blog** - Technical articles (5 starter posts included)
7. **Contact** - Email, GitHub, LinkedIn, newsletter

## 📱 Preview Sections

- Homepage: `http://localhost:3000`
- Blog: `http://localhost:3000/blog`
- Individual Post: `http://localhost:3000/blog/delta-lake-lakehouse`

## 🚢 Deploy to Production

### Option 1: Vercel (Easiest)
1. Push to GitHub
2. Import in Vercel
3. Deploy

### Option 2: Build Manually
```bash
npm run build
npm start
```

## 🔍 Included Blog Posts

1. **How to Build a Lakehouse Using Delta Lake & Databricks**
2. **Snowflake vs BigQuery vs Databricks — Architecture Breakdown**
3. **Data Engineering System Design for Real-Time Applications**
4. **Modern Data Pipelines with PySpark: Best Practices & Patterns**
5. **How LLMs Will Transform Data Engineering**

## 💡 Tips

- Use `npm run lint` to check for errors
- All components use TypeScript for type safety
- Framer Motion handles animations
- ShadCN UI provides accessible components
- MDX allows React in Markdown

## 🆘 Need Help?

Check the full `README.md` for:
- Detailed customization guide
- Troubleshooting tips
- Deployment instructions
- SEO optimization guide

---

**Happy building! 🎉**
