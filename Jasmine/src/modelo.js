function Sistema() {
    this.usuarios = {};

    // Method to add a user
    this.agregarUsuario = function(nick) {
        if (!this.usuarios[nick]) {
            this.usuarios[nick] = new Usuario(nick);
            console.log("User added: " + nick);
        } else {
            console.log("User already exists: " + nick);
        }
    };

    // Method to get all users
    this.obtenerUsuarios = function() {
        return this.usuarios;
    };

    // Method to check if a user is active
    this.usuarioActivo = function(nick) {
        return !!this.usuarios[nick];
    };

    // Method to delete a user
    this.eliminarUsuario = function(nick) {
        if (this.usuarios[nick]) {
            delete this.usuarios[nick];
            console.log("User deleted: " + nick);
        } else {
            console.log("User not found: " + nick);
        }
    };
}

function Usuario(nick) {
    this.nick = nick;
}
