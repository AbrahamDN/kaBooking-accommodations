type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header className="container">
        <span>Logo</span>

        <nav>Nav</nav>
      </header>

      <>{children}</>

      <footer className="container">Footer</footer>
    </>
  );
};
export default Layout;
