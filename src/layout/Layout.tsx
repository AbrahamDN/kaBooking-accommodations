import Header from "../components/header/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />

      <>{children}</>

      <footer className="container">Footer</footer>
    </>
  );
};
export default Layout;
