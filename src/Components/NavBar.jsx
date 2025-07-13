import Search from "./Search";

const Navbar = () => {
  const navItems = ["Home", "Movies", "Series", "Trending", "Categories"];

  return (
    <nav className="nav-bar">
      <div className="logo-hamb">
        <div className="nav-logo">
          <span className="logo-text">
            <img
              src="https://hqebqbizigkkklacymfs.supabase.co/storage/v1/object/sign/dezimo/Vector.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmI3YmIwNi0zNjU1LTRhZDktYjJiMi0wYmNjZTEyMzJjMzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkZXppbW8vVmVjdG9yLnBuZyIsImlhdCI6MTc1MjE0NDkxNSwiZXhwIjoxNzgzNjgwOTE1fQ.5_6Wjx_DVVWKWeNUuRiOssEw6b4zbrhTltBeDQjLWnc"
              alt=""
            />
          </span>
          <span className="logo-span">
            <img
              src="https://hqebqbizigkkklacymfs.supabase.co/storage/v1/object/sign/dezimo/Vector%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmI3YmIwNi0zNjU1LTRhZDktYjJiMi0wYmNjZTEyMzJjMzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkZXppbW8vVmVjdG9yICgxKS5wbmciLCJpYXQiOjE3NTIxNDUwMDYsImV4cCI6MTc4MzY4MTAwNn0.KIv1r0UiJlkgyp82SGrs4cLoRELlg2kqNfjqfXHnLW8"
              alt=""
            />
          </span>
        </div>
        <div className="hamburger">
            <img
              src="https://hqebqbizigkkklacymfs.supabase.co/storage/v1/object/sign/dezimo/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24%20(1).svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmI3YmIwNi0zNjU1LTRhZDktYjJiMi0wYmNjZTEyMzJjMzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkZXppbW8vbWVudV8yNGRwX0UzRTNFM19GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNCAoMSkuc3ZnIiwiaWF0IjoxNzUyMjI5MjAwLCJleHAiOjE3ODM3NjUyMDB9.neWlmmzh3Kw8mztABbbVk0dhVk2ZnKmWTOFmesdy9GI"
              alt=""
            />
        </div>
      </div>

      <ul className="navigation">
        {navItems.map((item, index) => (
          <li key={index} className="list-item">
            {item}
          </li>
        ))}
      </ul>
      <Search />
    </nav>
  );
};

export default Navbar;
