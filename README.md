# RecStack - Recruitment Platform

A modern recruitment management platform built with Next.js.

## Setup

1. Clone the repository:
```bash
git clone https://github.com/gthfth/recstack.git
cd recstack
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your Airtable credentials:
```
AIRTABLE_API_KEY=your_api_key
AIRTABLE_BASE_ID=your_base_id
```

4. Run the development server:
```bash
npm run dev
```

## Features

- Dashboard for recruitment metrics
- Candidate management
- Deal tracking
- Activity feed
- CRM functionality

## Deployment Options

### Vercel Deployment

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Set the environment variables in Vercel:
   - AIRTABLE_API_KEY
   - AIRTABLE_BASE_ID
4. Deploy the application

### Netlify Deployment

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Use the netlify.toml configuration included in the project
4. Deploy the application

### Known Issues

- Server component integration requires 'use server' directives on server functions
- The build process may time out when generating static pages for the dashboard
- Airtable connection errors may occur during build

## Development Notes

This application uses Next.js App Router with a combination of server and client components. When passing server functions to client components, make sure to mark them with 'use server'.

The project structure follows Next.js best practices:
- `/app` - Page routes and layouts
- `/components` - UI components
- `/lib` - Utility functions and data fetching
- `/public` - Static assets

## License

MIT 