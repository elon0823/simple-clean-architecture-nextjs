# Next.js Frontend Boilerplate

This is a boilerplate project for building frontend applications with React + Next.js (BFF) + NextAuth. It provides a clean, extensible architecture that separates concerns and promotes maintainable code.

## Project Overview

This boilerplate is designed to serve as a starting point for frontend projects that need to interact with a separate backend service. It implements:

- **Component organization** using Atomic Design principles
- **Data fetching** with TanStack React Query
- **API integration** using openapi-typescript for type-safe API calls
- **Authentication** with NextAuth
- **Backend For Frontend (BFF)** pattern using Next.js API routes

## Directory Structure

```
├── public/               # Static files
├── src/
│   ├── actions/          # React Query-based data fetching logic
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components (Atomic Design)
│   │   ├── atoms/        # Basic building blocks
│   │   ├── molecules/    # Combinations of atoms
│   │   ├── organisms/    # Complex UI sections
│   │   ├── templates/    # Page layouts
│   ├── context/          # React context providers
│   ├── datasource/       # Data sources (e.g., remote api, local storage)
│   │   ├── remote/       # External API interactions
│   │   │   ├── schema/   # OpenAPI generated types
|    │   ├── local/        # Local storage interactions
│   ├── lib/              # Shared utilities and helpers
│   ├── model/            # Data models (domain entities)
│   ├── types/           # Custom TypeScript types
├── next.config.js        # Next.js configuration
└── package.json
```

## Core Design Principles

### Atomic Design

Components are organized following Atomic Design methodology:
- **Atoms**: Basic UI elements
- **Molecules**: Simple component combinations
- **Organisms**: Complex UI sections
- **Templates**: Page layouts

### Component Organization Strategy

To prevent over-abstraction while maintaining the Atomic Design principles:

- **Page-specific containers**: Container-role organisms that are used only on specific pages are initially placed in `app/[page]/containers/` directories
- **Promotion path**: When these containers become reusable across multiple pages, they are promoted to `components/organisms/`
- **Controlled abstraction**: This approach prevents premature component abstraction while providing a clear path for component evolution

This strategy balances the benefits of component reusability with the pragmatic needs of page-specific implementations, ensuring that the component library grows organically based on actual usage patterns rather than speculative abstractions.

### Data Fetching

Data fetching logic is implemented using TanStack React Query:
- Custom hooks in the `/actions` directory encapsulate API calls
- Leverages React Query for caching, refetching, and state management
- Leverages server-action pattern for server-side data fetching

### API Route Strategy

- **Server Actions First**: Leverages Next.js 14's server actions for all data operations, eliminating the need for traditional API routes in most cases
- **Infrastructure Exceptions**: Only infrastructure-level endpoints (such as health checks, ping endpoints) are implemented as Next.js API routes
- **BFF Pattern**: This approach reinforces the Backend-For-Frontend pattern by keeping business logic within server actions while maintaining a clean separation between frontend and backend concerns
- **Reduced Surface Area**: Minimizes exposed API endpoints, improving security and reducing maintenance overhead

This strategy provides a more streamlined development experience by keeping data fetching logic closer to where it's used while maintaining the benefits of server-side execution.

### API Integration

External API integration is type-safe using openapi-typescript:
- Generated types from OpenAPI specifications
- Type-safe API calls through axios
- Centralized API client configuration

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## Planned Features

The following features are under consideration and have not been fully implemented yet:

### Logging and Monitoring

- **Sentry Integration**: Plans to implement Sentry for error tracking, performance monitoring, and issue management
- **Structured Logging**: Standardized logging approach for both client and server-side operations
- **Application Insights**: Dashboard and metrics to track user behavior and application performance

### Testing Strategy

- **Unit Testing**: Component and utility function tests using Jest and React Testing Library
- **Integration Testing**: API and data flow validation
- **End-to-End Testing**: Full user journey validation with Cypress or Playwright
- **Test Coverage Reporting**: Metrics to ensure adequate test coverage across the codebase

These features will further enhance the boilerplate's robustness and maintainability for production applications.
