import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Posts } from "./components/Posts";
import { Redirect } from "./components/Redirect";
import { Menu } from "./components/Menu";
import { Post } from "./components/Post";
import { NotFound } from "./components/NotFound";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Posts />} />
        {/* <Route path="/post/:id" element={<Posts />} /> */}

        <Route path="/post" element={<Posts />}>
          <Route path=":id" element={<Post />} />
        </Route>

        <Route path="/redirect" element={<Redirect />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
