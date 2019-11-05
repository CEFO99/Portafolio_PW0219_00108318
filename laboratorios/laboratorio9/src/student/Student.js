class Student {
    constructor(carnet, nombre, lastname) {
        this._carnet = carnet;
        this._nombre = nombre;
        this._lastname = lastname;
    }

    get carnet() { return this._carnet }
    get nombre() { return this._nombre }
    get lastname() { return this._lastname }

    // Hacen falta las validaciones antes de la asignación
    set carnet(carnet) { this._carnet = carnet }
    set nombre(nombre) { this._nombre = nombre }
    set lastname(lastname) { this._lastname = lastname }
}

export default Student;