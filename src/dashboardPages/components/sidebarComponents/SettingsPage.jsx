import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SettingsPage() {
  const navigate = useNavigate();
  const storedUser = JSON.parse(sessionStorage.getItem("currentUser"));

  const [user, setUser] = useState(storedUser);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...storedUser });

  const handleSave = (e) => {
    e.preventDefault();
    sessionStorage.setItem("currentUser", JSON.stringify(editedUser));
    setUser(editedUser);
    setIsEditing(false);
    alert("Profile Updated");
  };

  const handleDelete = () => {
    sessionStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="card-page-sidebar bg-white p-4 rounded-lg w-[400px] ">
      <h3 className="header-title p-2">Account Settings</h3>

      {!isEditing ? (
        <div>
          <p>
            <strong>Name: </strong>
            {user.name}
          </p>
          <p>
            <strong>Email: </strong>
            {user.email}
          </p>
          <p>
            <strong>Password: </strong>
            {user.password}
          </p>
          <button
            className="button-global m-3"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit Profile
          </button>
          <br />
          <button
            className="button-global"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Back
          </button>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSave}>
            <label>
              <strong>Name: </strong>
              <input
                type="text"
                value={editedUser.name}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, name: e.target.value })
                }
              />
            </label>
            <br />
            <label>
              <strong>Email: </strong>
              <input
                type="email"
                value={editedUser.email}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, email: e.target.value })
                }
              />
            </label>
            <br />
            <label>
              <strong>Password: </strong>
              <input
                type="password"
                value={editedUser.password}
                onChange={(e) => {
                  setEditedUser({ ...editedUser, password: e.target.value });
                }}
              />
            </label>
            <br />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 rounded-lg p-1 pl-1.5 pr-1.5 m-2
             text-white cursor-pointer"
            >
              Save
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 rounded-lg p-1 pl-1.5 pr-1.5 m-2
             text-white cursor-pointer"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      <button
        className="bg-red-500 hover:bg-red-700 rounded-lg p-1 pl-1.5 pr-1.5 m-2 mt-4
       text-white cursor-pointer"
        onClick={handleDelete}
      >
        DELETE PROFILE
      </button>
    </div>
  );
}

export default SettingsPage;
