function Sistema() { 
    this.usuarios = {};

    // Method to add a user
    this.agregarUsuario=function(nick){
        let res={"nick":-1};
        if (!this.usuarios[nick]){
        this.usuarios[nick]=new Usuario(nick);
        res.nick=nick;
        }
        else{
        console.log("el nick "+nick+" está en uso");
        }
        return res;
        }

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

     // Método para obtener el número de usuarios
     this.numeroUsuarios = function() {
        return Object.keys(this.usuarios).length; // Retorna el número de claves en el objeto usuarios
    };
}

function Usuario(nick) {
    this.nick = nick;
}

// Exporting the Sistema and Usuario classes
module.exports = {
    Sistema,
    Usuario
};
