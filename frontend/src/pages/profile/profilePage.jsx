import React from "react";
import { useProfile, useSession } from "../../context/SessionContext";
import { useEffect, useState } from "react";
import IconPencil from "../../icons/IconPencil";

export default function ProfilePage() {
  const profile = useProfile();
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const { onLogOut } = useSession();

  useEffect(() => {
    setEditName(profile?.userName || "");
    setEditEmail(profile?.email || "");
  }, [profile]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Logica para guardar cambios y desactivar modo edición
    setIsEditing(false);
  };

  return (
    <>
      <div className="mx-4 my-5">
        <h1 className="my-8 font-bold text-xl">Tú Perfil</h1>
        <div className="mb-4 flex items-start">
          <img
            src={profile?.avatar}
            alt=""
            className="rounded-full h-24 w-24 object-cover border-4 border-main-color1"
          />
          <h2 className="ml-4 mt-3 font-bold text-[20px]">
            {profile?.userName}
          </h2>
        </div>

        <div className="my-6">
          <h3 className="text-gray-600 text-sm mb-1">Nombre y Apellido</h3>
          {isEditing ? (
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="focus:outline-none border-b border-main-color1 w-full"
            />
          ) : (
            <p>{profile?.userName}</p>
          )}
        </div>
        <div>
          <h3 className="text-gray-600 text-sm mb-1">Email</h3>
          {isEditing ? (
            <input
              type="text"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
              className="focus:outline-none border-b border-main-color1 w-full"
            />
          ) : (
            <p>{profile?.email}</p>
          )}
        </div>
        <div className="my-5">
          {isEditing ? (
            <button
              onClick={handleSaveClick}
              className="bg-main-color1 text-white px-4 py-2 rounded-md"
            >
              Guardar
            </button>
          ) : (
            <button onClick={handleEditClick} className="text-main-color1">
              Editar
            </button>
          )}
        </div>
        <div className="fixed bottom-20 right-4">
          <button
            onClick={onLogOut}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </>
  );
}
