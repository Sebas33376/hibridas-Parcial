import { useProfile, useSession } from "../../context/SessionContext";
import { useEffect, useState } from "react";
import "./ProfilePage.css";
import { Link } from "react-router-dom";
import IconBack from "../../icons/IconBack";


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
      <Link to="/" className="bg-main-dark inline-block p-3 ml-5 mt-3 rounded-md hover:bg-gray-600">
        <span >
          <IconBack />
        </span>
      </Link>
      <div className="mx-20 my-5">
        <h1 className="my-8 font-bold text-xl">Tú Perfil</h1>
        <div className="mb-4 flex items-start">
          <img
            src="../../../public/avatar.png"
            alt="Avatar del usuario"
            className="rounded-full h-24 w-24 object-cover border-4 border-main-color1"
          />
        </div>
        <div className="my-6">
          <h3 className="text-gray-600 text-sm mb-1">Usuario: </h3>
          {isEditing ? (
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="focus:outline-none border-b border-main-color1 w-full"
              autoFocus
            />
          ) : (
            <p>{profile?.userName}</p>
          )}
        </div>
        {/* <div>
          <h3 className="text-gray-600 text-sm mb-1">Mail: </h3>
          {isEditing ? (
            <input
              type="email"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
              className="focus:outline-none border-b border-main-color1 w-full"
            />
          ) : (
            <p>{profile?.email}</p>
          )}
        </div> */}
        <div className="my-5">
          {isEditing ? (
            <button
              onClick={handleSaveClick}
              className="bg-main-color1 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Guardar
            </button>
          ) : (
            <button onClick={handleEditClick} className="bg-main-color1 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Editar
            </button>
          )}
        </div>
        <div className="fixed bottom-20 right-4 mx-10 my-5">
          <button
            onClick={onLogOut}
            className="bg-main-color2 text-white px-4 py-2 rounded-md hover:bg-blue-500"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </>
  );
}