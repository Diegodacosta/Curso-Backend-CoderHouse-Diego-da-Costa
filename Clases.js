class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }



}

GetFullName() {
    return this.nombre + " " + this.apellido;
}

AddMascota(mascota) {
    this.mascotas.push(mascota);

}

    CountMascotas() {
        return this.mascotas.length;
    }

    AddBook(book, autor) {
        this.libros.push({ book, autor });
    }

    GetBookNames() {    
        return this.libros.map((libro) => libro.book);
    }





