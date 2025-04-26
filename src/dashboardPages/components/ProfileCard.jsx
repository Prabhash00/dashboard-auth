
import React from "react";

export default function ProfileCard() {
  const raw = sessionStorage.getItem("currentUser");
  if (!raw) return <div className="card-inner">Not logged in</div>;

  const user = JSON.parse(raw);
  return (
    <div >
      <h3>Profile Summary/Account Info</h3>
      <br />
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Password:</strong> {user.password}
      </p>
      <p>
        <strong>Type Of Token Storage: </strong> sessionStorage
      </p>
    </div>
  );
}
