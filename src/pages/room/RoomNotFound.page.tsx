import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";

const RoomNotFoundPage = () => {
  return (
    <Layout>
      <main className="page container">
        <div className="not-found">
          <h1 className="h2">
            404: <br />
            Room not found.
          </h1>
          <Link className="link" to="/">
            Return to homepage
          </Link>
        </div>
      </main>
    </Layout>
  );
};
export default RoomNotFoundPage;
