# Overview

Flora Prime Properties is a modern real estate website specializing in property transactions in Kenya. The application features a sleek landing page showcasing premium properties, services, and contact functionality. Built as a full-stack web application, it provides property listings, featured properties, and a contact form for potential clients to reach out about real estate services.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with React 18 using TypeScript and follows a component-based architecture. Key architectural decisions include:

**UI Framework**: Uses shadcn/ui components built on top of Radix UI primitives for accessible, customizable components
- **Rationale**: Provides consistent design system with accessibility built-in
- **Alternative**: Could use Material-UI or Chakra UI, but shadcn/ui offers better customization

**Styling**: Tailwind CSS with custom CSS variables for theming
- **Rationale**: Utility-first approach enables rapid development and consistent spacing
- **Custom theme**: Flora Prime brand colors defined as CSS variables for easy theming

**State Management**: TanStack Query (React Query) for server state management
- **Rationale**: Handles caching, background updates, and error states automatically
- **Alternative**: Could use Redux or Zustand, but React Query is optimal for server-heavy applications

**Routing**: Wouter for lightweight client-side routing
- **Rationale**: Minimal bundle size compared to React Router
- **Current implementation**: Simple single-page application with smooth scrolling navigation

**Animation**: Framer Motion for smooth animations and transitions
- **Rationale**: Declarative API that integrates well with React components
- **Usage**: Page transitions, scroll-triggered animations, hover effects

## Backend Architecture
Express.js server following REST API principles with clean separation of concerns:

**API Layer**: Express routes handle HTTP requests and responses
- **Rationale**: Mature ecosystem with extensive middleware support
- **Error handling**: Centralized error middleware for consistent responses

**Storage Layer**: Abstracted storage interface with in-memory implementation
- **Rationale**: Allows easy swapping between storage backends
- **Current**: MemStorage class with sample data for development
- **Future**: Can easily switch to database implementation

**Schema Validation**: Zod for runtime type checking and validation
- **Rationale**: TypeScript-first schema validation with excellent error messages
- **Integration**: Shared schemas between frontend and backend

## Data Storage Strategy
**Current Implementation**: In-memory storage with hardcoded sample data
- **Rationale**: Rapid prototyping and development without database setup
- **Limitations**: Data doesn't persist between server restarts

**Database Configuration**: Drizzle ORM configured for PostgreSQL
- **Rationale**: Type-safe ORM with excellent TypeScript integration
- **Migration support**: Built-in schema migration capabilities
- **Connection**: Neon Database serverless PostgreSQL configured

**Schema Design**: Three main entities - users, properties, and contacts
- **Properties**: Support for different types (plot, house, commercial) with flexible pricing
- **Contacts**: Capture lead information from contact form submissions
- **Users**: Basic user structure for future authentication features

## Development Architecture
**Build System**: Vite for fast development and optimized production builds
- **Rationale**: Significantly faster than webpack for development
- **Features**: Hot module replacement, TypeScript support, optimized bundling

**Monorepo Structure**: Shared schemas and types between client and server
- **Rationale**: Reduces code duplication and ensures type safety across stack
- **Organization**: Clear separation of client, server, and shared code

**Development Tools**: 
- TypeScript for type safety across the entire stack
- ESLint and Prettier for code quality (implied by project structure)
- Replit-specific optimizations for cloud development environment

# External Dependencies

## UI and Styling
- **Radix UI**: Comprehensive set of accessible React components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Production-ready motion library for React animations
- **Lucide React**: Beautiful, customizable SVG icons

## Data Management
- **TanStack Query**: Powerful data synchronization for React applications
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation library

## Database and Storage
- **Drizzle ORM**: Lightweight TypeScript ORM for SQL databases
- **Neon Database**: Serverless PostgreSQL database service
- **Connect PG Simple**: PostgreSQL session store for Express sessions

## Development and Build Tools
- **Vite**: Next generation frontend build tool
- **TypeScript**: Static type checking for JavaScript
- **ESBuild**: Fast JavaScript bundler for production builds

## Communication Services
- **WhatsApp Business API**: Direct customer communication through floating WhatsApp button
- **Contact Form Integration**: Captures leads and stores in database for follow-up

## Fonts and Assets
- **Google Fonts**: Inter font family for modern typography
- **Unsplash**: High-quality property images for showcase