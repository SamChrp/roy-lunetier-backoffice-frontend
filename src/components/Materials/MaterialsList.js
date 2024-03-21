import React, { useEffect, useState } from 'react';
import { fetchMaterials, deleteMaterial } from '../../api/materials';

const MaterialsList = () => {
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        const getMaterials = async () => {
            const response = await fetchMaterials();
            setMaterials(response.data);
        };

        getMaterials();
    }, []);

    const handleDelete = async (id) => {
        await deleteMaterial(id);
        setMaterials(materials.filter((material) => material.id !== id));
    };

    return (
        <div>
            {materials.map((material) => (
                <div key={material.id}>
                    <h2>{material.name}</h2>
                    <p>{material.value}</p>
                    <p>{material.selected ? 'Sélectionné' : 'Non sélectionné'}</p>
                    <p>{material.model}</p>
                    <p>{material.qualites.join(', ')}</p>
                    <p>{material.url}</p>
                    <p>{material.description}</p>
                    <p>{material.image}</p>
                    <button onClick={() => handleDelete(material.id)}>Supprimer</button>
                </div>
            ))}
        </div>
    );
};

export default MaterialsList;