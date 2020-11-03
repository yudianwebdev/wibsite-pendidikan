import Link from "next/link";

const A = ({ href = "", className = "", children, ...rest }) => {
  const newHref = href;

  return (
    <>
      {href.includes("http") ? (
        <a href={href} className={className}>
          {children}
        </a>
      ) : (
        <Link {...rest} href={newHref} as={newHref}>
          <a href={newHref} className={className}>
            {children}
          </a>
        </Link>
      )}
    </>
  );
};

export default A;
