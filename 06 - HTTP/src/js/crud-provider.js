
const urlCrud = 'https://reqres.in/api/users';

export const getUsuario = async(id) => {
    const respuesta = await fetch(`${urlCrud}/${id}`);
    const {data} = await respuesta.json();

    return data;
};

export const crearUsuario = async(usuario) => {
    const respuesta = await fetch(urlCrud, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await respuesta.json();
}

export const updateUsuario = async(id, usuario) => {
    const respuesta = await fetch(`${urlCrud}/${id}`, {
        mehod: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return await respuesta.json();
}

export const deleteUsuario = async(id) => {
    const respuesta = await fetch(`${urlCrud}/${id}`, {
        method: 'DELETE'
    });

    return (respuesta.ok) ? 'Borrado' : 'No se pudo eliminar';
}