import React from 'react'

export default function footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
    <footer className="footer container-fluid py-3 bg-dark">
      <p>Copyright &copy; {currentYear} Your Company Name</p>
      <ul className="mb-0">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms & Conditions</a>
        </li>
        {/* Add more links as needed */}
      </ul>
    </footer>
    </div>
  )
}
