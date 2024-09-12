import React from "react";

const StyledLink = () => {
  return (
    <Link
      href={href}
      className="transition-all ease-in-out duration-200 hover:underline underline-offset-8"
    >
      {children}
    </Link>
  );
};

export default StyledLink;
