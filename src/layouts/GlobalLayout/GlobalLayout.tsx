import { Outlet } from "react-router-dom";

export const GlobalLayout = () => {
  return (
    <>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </>
  );
};
