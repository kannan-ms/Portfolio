# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, shadcn/ui components, and Framer Motion animations.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Responsive**: Mobile-first approach that works on all devices
- **Smooth Scrolling**: Navigation with smooth scroll effects
- **Animations**: Beautiful Framer Motion animations throughout
- **Component-Based**: Reusable components for easy maintenance
- **SEO Optimized**: Proper metadata and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with Navbar and Footer
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── badge.tsx
│   ├── Navbar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Projects.tsx         # Projects section
│   ├── Skills.tsx           # Skills section
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer component
├── lib/
│   └── utils.ts             # Utility functions
├── tailwind.config.ts       # Tailwind configuration
├── postcss.config.mjs       # PostCSS configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ✏️ Customization Guide

### 1. Personal Information

Update the following files with your information:

#### Hero Section (`components/Hero.tsx`)
- Replace `[Your Name]` with your actual name
- Update the headline and description
- Add your profile photo (replace the placeholder)

#### About Section (`components/About.tsx`)
- Update the bio, education, and career goals text
- Customize the descriptions to match your background

#### Projects Section (`components/Projects.tsx`)
- Replace project titles, descriptions, and tools
- Update GitHub and live demo links
- Add your actual project screenshots

#### Skills Section (`components/Skills.tsx`)
- Modify skill categories and individual skills
- Update proficiency levels (Basic, Intermediate, Advanced)
- Add or remove skill categories as needed

#### Contact Section (`components/Contact.tsx`)
- Update social media links (GitHub, LinkedIn, Email)
- Customize the "What I'm looking for" section

#### Footer (`components/Footer.tsx`)
- Replace `[Your Name]` with your actual name

### 2. Styling & Colors

#### Color Scheme
The portfolio uses a blue-indigo color scheme. To change it:

1. Update CSS variables in `app/globals.css`
2. Modify gradient classes in components
3. Update Tailwind config if needed

#### Typography
- Font family is set to Inter (Google Fonts)
- You can change this in `app/layout.tsx`

### 3. Adding New Sections

To add a new section:

1. Create a new component in the `components/` folder
2. Import and add it to `app/page.tsx`
3. Add navigation link in `components/Navbar.tsx`
4. Update the scroll behavior if needed

### 4. Project Images

1. Add your project images to the `public/` folder
2. Update the image paths in `components/Projects.tsx`
3. Replace placeholder text with actual image components

## 🎨 Available Components

### UI Components (shadcn/ui)
- **Button**: Multiple variants (default, outline, secondary, ghost, link)
- **Card**: Header, content, footer sections
- **Input**: Text input fields
- **Textarea**: Multi-line text input
- **Badge**: Skill and technology tags

### Custom Components
- **Navbar**: Responsive navigation with mobile menu
- **Hero**: Animated hero section with CTA buttons
- **About**: Three-column card layout
- **Projects**: Responsive grid with project cards
- **Skills**: Categorized skill display
- **Contact**: Form with social links
- **Footer**: Simple footer with copyright

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:

- **Mobile**: Single column layout, collapsible navigation
- **Tablet**: Two-column grid for projects and skills
- **Desktop**: Three-column grid for optimal space usage

## 🎭 Animations

All animations use Framer Motion:

- **Page Load**: Fade-in animations for sections
- **Scroll**: Staggered animations when sections come into view
- **Hover**: Interactive hover effects on cards and buttons
- **Navigation**: Smooth mobile menu transitions

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting (recommended)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Happy coding! 🎉**
