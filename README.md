Project Name: Dev Stack
Git Repository Link: 
Live Link: 

A simple and responsive web application for exploring different web development technologies and building your own technology stack.

Technologies Used

React

TypeScript

Tailwind CSS

DaisyUI

React Icons

React Toastify

JSON

Features

Explore Technologies
Browse different technologies with their category, difficulty, rating, description, and badge.

Build Your Stack
Add technologies to your personal stack. A technology cannot be added more than once.

Manage Your Stack
Remove individual technologies or clear the entire stack using the Remove All button.

React Questions & Answers

1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understands.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component.
State is data managed inside a component that caned change over time.

3. What does the useState hook do, and where did you use it in this project?

useState is used to create and manage changing data in a React component. In this project, I used it to manage the selected technologies in the Your Stack section.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to run code after a component renders, especially for side effects. It can be used to fetch data from a JSON file and update the component with that data.

5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each items in a list. It helps React understand which items were changed, added, or removed.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

For example, in the stack section:

{addToCart.length > 0 ? (
  <StackItems />
) : (
  <p>Your Stack is Empty.</p>
)}

When the stack is empty, the empty message is shown. When technologies are added, the selected items are shown.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props. To send something back, the parent can pass a function as a prop, and the child can call that function with the required data.

Project Highlights

Responsive design for mobile, tablet, and desktop.

Sticky navigation bar.

Technology cards with a responsive layout.

Add, remove, and remove-all stack functionality.

Duplicate technology prevention.

Toast notifications using React Toastify.

Loading state while data is being loaded.

Shared gradient theme across the UI.

Project Structure

src/
├── components/
│   ├── Banner/
│   ├── Navbar/
│   └── tecnologies/
│       ├── Tecnologies.tsx
│       ├── TecnologyCard.tsx
│       └── StackSidebar.tsx
├── types/
├── App.tsx
└── main.tsx

