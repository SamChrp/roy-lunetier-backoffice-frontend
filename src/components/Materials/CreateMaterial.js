import React, { useState } from 'react';
import { createMaterial } from '../../api/materials';

const CreateMaterial = () => {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [selected, setSelected] = useState(false);
    const [model, setModel] = useState('');
    const [qualites, setQualites] = useState([]);
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('value', value);
        formData.append('selected', selected);
        formData.append('model', model);
        formData.append('qualites', qualites);
        formData.append('url', url);
        formData.append('description', description);
        if (image) {
            formData.append('image', image);
        }
        await createMaterial(formData);
        setName('');
        setValue('');
        setSelected(false);
        setModel('');
        setQualites([]);
        setUrl('');
        setDescription('');
        setImage(null);
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
                <input type="text" value={qualites.join(',')} onChange={(e) => setQualites(e.target.value.split(','))} />
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
            <button type="submit">Créer</button>
        </form>
    );
};

export default CreateMaterial;