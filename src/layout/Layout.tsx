type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <span>Logo</span>

        <nav>Nav</nav>
      </header>

      <>{children}</>

      <footer>Footer</footer>
    </>
  );
};
export default Layout;
