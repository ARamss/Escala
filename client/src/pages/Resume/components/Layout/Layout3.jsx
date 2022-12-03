import React, { useState } from "react";

function Layout({ children }) {
  const [toggleHeader, setToggleHeader] = useState(false);
  const handleToggle = () => {
    setToggleHeader(!toggleHeader);
  };
  return (
    <div className="site-wrapper">
      <main
        className={
          toggleHeader ? "content float-right push" : "content float-right"
        }
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;
