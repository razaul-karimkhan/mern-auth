import React from "react";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  return (
    <div className="bg-secondary">
      <div className="d-flex justify-content-between d-items-center p-3">
        <Nav.Link href="/">
          <h1 className="font-bold"> Auth App</h1>
        </Nav.Link>

        <ul className="d-flex gap-4">
          <Nav.Link href="/">
            <li>Home</li>
          </Nav.Link>
          <Nav.Link href="/about">
            <li>About</li>
          </Nav.Link>
          <Nav.Link href="/signin">
            <li>Sign In</li>
          </Nav.Link>
        </ul>
      </div>
    </div>
  );
}
