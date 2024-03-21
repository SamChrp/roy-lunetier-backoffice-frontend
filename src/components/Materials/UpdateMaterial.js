import React, { useState, useEffect } from 'react';
import { fetchMaterialById, updateMaterial } from '../../api/materials';

const UpdateMaterial = ({ id }) => {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [selected, setSelected] = useState(false);
    const [model, setModel] = useState('');
    const [qualites, setQualites] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        const getMaterial = async () => {
            const response = await fetchMaterialById(id);
            const material = response.data;
            setName(material.name);
            setValue(material.value);
            setSelected(material.selected);
            setModel(material.model);
            setQualites(material.qualites.join(','));
            setUrl(material.url);
            setDescription(material.description);
            setImage(material.image);
        };

        getMaterial();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('value', value);
        formData.append('selected', selected);
        formData.append('model', model);
        formData.append('qualites', qualites.split(','));
        formData.append('url', url);
        formData.append('description', description);
        if (image) {
            formData.append('image', image);
        }
        await updateMaterial(id, formData);
    };

    const handleFileChange = (event) => {
        setImage(event.target.files[0]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom du matériau :
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Valeur :
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            </label>
            <label>
                Sélectionné :
                <input type="checkbox" checked={selected} onChange={(e) => setSelected(e.target.checked)} />
            </label>
            <label>
                Modèle :
                <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
            </label>
            <label>
                Qualités :
                <input type="text" value={qualites} onChange={(e) => setQualites(e.target.value)} placeholder="Qualité1,Qualité2,Qualité3" />
            </label>
            <label>
                URL :
                <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            </label>
            <label>
                Description :
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Image :
                <input type="file" onChange={handleFileChange} />
            </label>
            <button type="submit">Mettre à jour</button>
        </form>
    );
};

export default UpdateMaterial;