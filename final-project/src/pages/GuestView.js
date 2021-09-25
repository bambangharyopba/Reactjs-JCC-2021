import React from "react";
import { useParams } from "react-router-dom";

import UserLayout from "../layouts/UserLayout";
import { Home, Movies, Games } from ".";

function PageContent() {
  let { page } = useParams();

  const pageSwitch = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "movies":
        return <Movies />;
      case "games":
        return <Games />;
      default:
        return <></>;
    }
  };

  return pageSwitch();
}

function GuestView() {
  return (
    <UserLayout>
      <PageContent />
    </UserLayout>
  );
}

export default GuestView;
