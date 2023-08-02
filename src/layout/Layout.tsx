import Header from "../components/header/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />

      <>{children}</>

      <footer className="container" style={{ textAlign: "center" }}>
        Made with thought! -{" "}
        <a
          className="link"
          href="https://github.com/AbrahamDN"
          target="_blank"
          rel="noopener noreferrer"
        >
          AbrahamDN
        </a>
      </footer>
    </>
  );
};
export default Layout;
