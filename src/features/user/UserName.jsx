import { useSelector } from "react-redux";

export default function UserName() {
  const username = useSelector((store) => store.user.username);

  if(!username) return;
  
  return (
    <span className="hidden text-sm font-semibold md:block">{username}</span>
  );
}
