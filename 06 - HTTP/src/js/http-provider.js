
const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

const cloudPreset = 'm7e9thsx';
const cloudUrl = 'https://api.cloudinary.com/v1_1/luisbp27/upload';

export const obtenerChiste = async() => {

    try {

        const respuesta = await fetch(jokeUrl);

        if (!respuesta.ok) {
            throw alert('No se pudo realizar la petición');
        }

        const {icon_url, id, value} = await respuesta.json();

        return {icon_url, id, value};

    } catch (err) {
        throw err;
    }
    
}

export const obtenerUsuarios = async() => {
    const respuesta = await fetch(urlUsuarios);
    const {data:usuarios} = await respuesta.json();

    return usuarios;
}

export const subirImagen = async(archivo) => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivo);

    try {
        const respuesta = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (respuesta.ok) {
            const cloudRespuesta = await respuesta.json();
            return cloudRespuesta.secure_url;
        } else {
            throw await respuesta.json();
        }

    } catch (err) {
        throw err;
    }
    
}