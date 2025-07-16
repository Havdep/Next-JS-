import React from "react";

const layout = ({
  children,
  notification,
  users,
  revenue,
}: {
  children: React.ReactNode;
  notification: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
}) => {
  return (
    <>
      {children}
      <div>Text from Layout</div>
      <div className="grid grid-cols-3 gap-4">
        {users}
        {notification}
        {revenue}
      </div>
    </>
  );
};

export default layout;
