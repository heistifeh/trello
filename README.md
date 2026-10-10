# Kanban Board

A Trello-style project board built with **Next.js** and **Supabase**. Create boards, organise tasks into columns, and drag cards between them.

<p>
  <img src="https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase"/>
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk"/>
</p>

## Features

- Sign in with Clerk; routes protected by Next.js middleware
- Create and manage boards, columns and cards
- Drag-and-drop cards between columns (dnd-kit)
- Data stored in Supabase
- Accessible UI components built on shadcn/ui (Radix)

## Tech stack

| Area | Tools |
|---|---|
| Framework | Next.js (App Router), React, TypeScript |
| Auth | Clerk |
| Database | Supabase (`@supabase/ssr`) |
| Drag and drop | dnd-kit |
| UI | Tailwind CSS, shadcn/ui, Lucide |

## Running locally

```bash
git clone https://github.com/heistifeh/trello.git
cd trello
npm install
```

Add your Supabase and Clerk keys to a `.env.local` file, then start the dev server:

```bash
npm run dev
```

## Author

Built by **Boluwatife Osineye**. [Portfolio](https://boluwatifeosineye.com) · [LinkedIn](https://linkedin.com/in/boluwatifeosineye) · [X](https://x.com/tifethedev)
