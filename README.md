# Faith Natasha Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Technologies Used

- **React** - Frontend library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and development server
- **shadcn/ui** - UI component library
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js 18+
- npm or bun package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to the project directory
cd faith

# Install dependencies
npm install
# or
bun install

# Start the development server
npm run dev
# or
bun dev
```

The site will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Project Structure

```
src/
├── components/     # React components
│   ├── ui/        # Reusable UI components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── pages/         # Page components
└── main.tsx       # Application entry point
```

## Customization

1. Update personal information in component files
2. Add your projects to `Projects.tsx`
3. Modify colors in `tailwind.config.ts` and `src/index.css`
4. Replace placeholder images and links

## Deployment

Build the project and deploy the `dist` folder to any static hosting service:

```bash
npm run build
```

Popular hosting options:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## License

MIT License - feel free to use this template for your own portfolio.
