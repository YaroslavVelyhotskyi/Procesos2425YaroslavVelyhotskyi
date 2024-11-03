function ClienteRest() {
  // Method to add a user
  this.agregarUsuario = function (nick) {
    $.getJSON("/agregarUsuario/" + nick, function (data) {
      if (data.nick != -1) {
        console.log("Usuario " + nick + " ha sido registrado");
      } else {
        console.log("El nick ya está ocupado");
      }
    }).fail(function () {
      console.log("Error al agregar usuario");
    });
  };

  // Method to get all users
  this.obtenerUsuarios = function () {
    $.getJSON("/obtenerUsuarios", function (data) {
      console.log("Usuarios:", data);
    }).fail(function () {
      console.log("Error al obtener usuarios");
    });
  };

  // Method to delete a user
  this.eliminarUsuario = function (nick) {
    $.getJSON("/eliminarUsuario/" + nick, function (data) {
      if (data.status === 'User deleted') {
        console.log("Usuario " + nick + " ha sido eliminado");
      } else {
        console.log("No se encontró el usuario " + nick);
      }
    }).fail(function () {
      console.log("Error al eliminar usuario");
    });
  };

  // Method to check if a user is active
  this.usuarioActivo = function (nick) {
    $.getJSON("/usuarioActivo/" + nick, function (data) {
      if (data.activo) {
        console.log("Usuario " + nick + " está activo");
      } else {
        console.log("Usuario " + nick + " no está activo");
      }
    }).fail(function () {
      console.log("Error al verificar si el usuario está activo");
    });
  };

  // Method to get the number of users
  this.numeroUsuarios = function () {
    $.getJSON("/numeroUsuarios", function (data) {
      console.log("Número de usuarios:", data.num);
    }).fail(function () {
      console.log("Error al obtener el número de usuarios");
    });
  };
}
