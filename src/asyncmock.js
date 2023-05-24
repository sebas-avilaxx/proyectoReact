const productos = [
    { nombre: "Kit Golden Ale", precio: 3100, stock: 5, id: "1", img: "../img/dorada.jpg", idCat: "2" },
    { nombre: "Kit Irish Red", precio: 3500, stock: 5, id: "2", img: "../img/roja.jpg", idCat: "2" },
    { nombre: "Kit Porter", precio: 3400, stock: 10, id: "3", img: "../img/negra.jpg", idCat: "3" },
    { nombre: "Kit Honey", precio: 4300, stock: 5, id: "4", img: "../img/dorada.jpg", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}