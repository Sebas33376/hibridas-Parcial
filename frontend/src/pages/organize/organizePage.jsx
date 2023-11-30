import "./organizePage.css";
import IconFilter from "../../icons/IconFilter";
import React, { useState } from 'react';

const OrganizePage = () => {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        sport: '',
        age: 0,
        quantity: 0,
        teamName: '',
        description: '',
        location: '',
    });

    // Manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Manejar envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar acciones con los datos, como enviarlos a un servidor
        console.log('Datos enviados:', formData);
    };

    return (
        <div>
            <div className="flex justify-between items-center mt-6">
                <h1 className="my-6 px-4 font-bold text-xl">Organizar</h1>
                <span className="mr-4">
                    <IconFilter />
                </span>
            </div>

            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Apellido:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Edad:
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Deporte:
                    <input
                        type="text"
                        name="sport"
                        value={formData.sport}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Cantidad del equipo:
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Nombre del equipo:
                    <input
                        type="text"
                        name="teamName"
                        value={formData.teamName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Descripción:
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Ubicación:
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Organizar equipo</button>
            </form>
        </div>
    );
};

export default OrganizePage;