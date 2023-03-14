import { Outlet, useParams, useSearchParams } from "react-router-dom";

export const Posts = () => {
  const { id } = useParams();
  const [query] = useSearchParams();

  return (
    <div>
      <h1>
        Post {`ID: ${id}`} {`QUERY: ${query.get("page")}`}
      </h1>
      <Outlet />
    </div>
  );
};
