import { useRouteError } from "react-router-dom";
import BackButton from "./BackButton";

export default function Error() {
  const error = useRouteError();

  return (
    <div className="app-error">
      <span>Something went wrong!</span>
      <p>{error.data || error.message}</p>
      <BackButton>&larr; Go Back</BackButton>
    </div>
  );
}
