# Modern React TypeScript Application

A modern, production-ready React application built with TypeScript, featuring a robust architecture and comprehensive tooling setup. This project combines the power of React with strong type safety, modern UI components, and efficient development workflows.

## Features

The application comes with a carefully chosen set of modern tools and features:

### Core Technologies
- React 18 with TypeScript for type-safe development
- Vite as the build tool for lightning-fast development experience
- React Router v7 for client-side routing
- Ant Design (antd) for polished UI components
- TanStack Query for efficient server state management
- Zustand for simple and scalable state management
- Tailwind CSS for utility-first styling

### Development Tools
- ESLint with TypeScript support for code quality
- Prettier for consistent code formatting
- Vitest for unit testing
- React Testing Library for component testing
- Husky and lint-staged for Git hooks
- Path aliases for cleaner imports

## Project Structure

The project follows a scalable and maintainable architecture:

```
src/
├── app/                    # Application core setup
│   ├── App.tsx            # Root component
│   └── routes.tsx         # Route definitions
├── modules/               # Feature-based modules
│   └── home/             # Home page module
├── shared/               # Shared resources
│   ├── components/       # Reusable components
│   │   └── layout/      # Layout components
│   ├── hooks/           # Custom React hooks
│   ├── types/           # TypeScript types/interfaces
│   └── utils/           # Utility functions
├── config/               # Configuration files
└── styles/              # Global styles
```

## Getting Started

### Prerequisites
- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd [project-name]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` by default.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview production build locally

## Development Guidelines

### Code Style

The project uses ESLint and Prettier for consistent code style. Configuration is provided through:
- `eslint.config.js` for linting rules
- `tsconfig.json` for TypeScript configuration
- `postcss.config.js` and `tailwind.config.js` for styling configuration

### Component Structure

Components are organized following these principles:
- Feature-based organization in the `modules` directory
- Shared components in the `shared/components` directory
- Layout components provide consistent page structure
- Type-safe props using TypeScript interfaces

### Routing

Routes are defined in `src/app/routes.tsx` using React Router v7. The application uses lazy loading for better performance:

```typescript
const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    // Add new routes here
]
```

### State Management

- Use Zustand for global state management
- TanStack Query for server state management
- React's built-in state management for component-level state

### Styling

The project uses a combination of:
- Tailwind CSS for utility-first styling
- Ant Design components for UI elements
- Global styles in `src/styles/globals.css`

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

[Add your license information here]
