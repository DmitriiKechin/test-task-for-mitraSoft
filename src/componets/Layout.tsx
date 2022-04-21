import { NavLink, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Blog</NavLink>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>&copy; ReactRouter Tutorials 2022</footer>
    </>
  );
}
