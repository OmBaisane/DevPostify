🚀 DevPostify

A modern blog-style web application built with Next.js (App Router) showcasing full-stack concepts like server-side rendering, server actions, API routes, and clean UI design.

---

🔥 Live Demo

👉 https://dev-postify-xvcl.vercel.app/

---

🧠 Project Overview

DevPostify is a learning-focused full-stack application where users can:

- View posts (fetched from server)
- Navigate using dynamic routes
- Add posts using Server Actions
- Delete posts via API Routes

«⚠️ Note: This project currently uses a mock API (JSONPlaceholder), so data is not persisted.»

---

⚙️ Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Vercel (Deployment)

---

✨ Features

🧩 Core Features

- Server-side data fetching
- Dynamic routing ("/posts/[id]")
- Server Actions (Add Post)
- API Routes (Delete Post)
- Client–Server communication

🎨 UI/UX

- Clean and responsive design
- Loading states
- Empty states
- Interactive buttons (hover effects)
- Auto UI refresh after actions

---

📁 Project Structure

app/
├── components/
│ ├── Navbar.tsx
│ ├── Container.tsx
│ ├── AddPostForm.tsx
│ └── PostItem.tsx
│
├── posts/
│ ├── page.tsx
│ └── [id]/page.tsx
│
├── api/
│ └── posts/
│ └── route.ts
│
├── layout.tsx

---

🧠 Key Learnings

- Difference between Client vs Server Components
- How Server Actions simplify form handling
- How API Routes handle backend logic
- Data flow:
  Client → API → Server → UI refresh
- Importance of separating logic for scalability

---

🚧 Current Limitations

- No real database (data is not saved permanently)
- Add/Delete actions are simulated

---

🔮 Future Improvements

- ✅ Integrate MongoDB (real database)
- ✅ Authentication (Login/Signup)
- ✅ Create/Edit/Delete real posts
- ✅ Better UI animations
- ✅ Pagination / search

---

💻 Setup Instructions

git clone https://github.com/OmBaisane/DevPostify
cd DevPostify
npm install
npm run dev

---

🚀 Deployment

Deployed on Vercel
👉 Instant updates on every push

---

🙌 Author

Om Baisane
Frontend Developer → Growing into Full Stack 🚀

---

💡 Final Note

This project is part of a structured learning journey:

Learn → Practice → Build → Improve

Next step: Real backend integration (MongoDB) 🔥
