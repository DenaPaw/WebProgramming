import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-green-200 flex flex-col items-center justify-center p-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 ">Hello, My name is Dena Paw</h1>
        <p className="text-lg text-gray-600 mt-2">Welcome To My Landing Page</p>
      </header>

      <main className="bg-white max-w-3xl w-full p-6 rounded-xl shadow-lg">
        <div className="flex justify-center mb-6">
          <img src="\src\assets\IMG_7.jpg" alt="Profile" className="rounded-full h-35 w-35 object-cover border-4 border-green-200" />
        </div>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
          <p className="text-gray-600 mt-4">
          I am a student at Arkansas Tech University, majoring in IT with a focus on programming.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Associate Degree in Business Technology - May 2022</li>
            <li>Bachelor Degree in Information Technology - Expected Fall 2025</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Contact</h2>
          <p className="text-gray-600 mt-4">
            You can reach me through the following links:
          </p>
          <div className="mt-4 space-x-4">
            <a href="mailto:Dpaw@atu.edu" className="text-blue-600">Email</a>
            <a href="https://www.linkedin.com/in/dena-paw-a924a6296/" className="text-blue-600">LinkedIn</a>
            <a href="https://github.com/DenaPaw" className="text-blue-600">GitHub</a>
          </div>
        </section>
      </main>
        <footer className=" w-full text-center text-gray-600">All right reserved</footer>
      </div>
  )
}

export default App
