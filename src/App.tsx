import React from "react";

import { RouterProvider } from "react-router-dom";
import { routersName, routes } from "./routes";

export function App() {
  return (
    <div className="container">
      <nav className="navigation">
        <ul>
          {routersName.map((route, index) => (
            <li key={index}>
              <a href={route.path}>{route.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="content">
        <RouterProvider router={routes} />
      </main>
    </div>
  );
}
