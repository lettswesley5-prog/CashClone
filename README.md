
CashClone Pro+

Steps:

1 Install backend
cd backend
npm install

2 Install frontend
cd ../frontend
npm install

3 Setup environment variables

Backend:
MONGO_URI=yourMongoConnection
JWT_SECRET=secret

Frontend:
NEXT_PUBLIC_API=http://localhost:5000/api

4 Run backend
npm start

5 Run frontend
npm run dev

Deploy:
Frontend -> Vercel
Backend -> Render
