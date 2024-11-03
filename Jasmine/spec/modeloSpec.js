
describe("Sistema", function() {
  let sistema;

  beforeEach(function() {
      sistema = new Sistema(); // Initialize a new Sistema instance for each test
  });

  it("should initially have no users", function() {
      expect(Object.keys(sistema.obtenerUsuarios()).length).toEqual(0);
  });

  it("should add a user", function() {
      sistema.agregarUsuario("Pepe");
      expect(sistema.obtenerUsuarios()["Pepe"]).toBeDefined();
      expect(sistema.obtenerUsuarios()["Pepe"].nick).toEqual("Pepe");
  });

  it("should not add a user if nickname is already in use", function() {
      sistema.agregarUsuario("Pepe");
      sistema.agregarUsuario("Pepe");
      expect(Object.keys(sistema.obtenerUsuarios()).length).toEqual(1); // Only one user should exist
  });

  it("should delete a user by nickname", function() {
      sistema.agregarUsuario("Pepe");
      sistema.eliminarUsuario("Pepe");
      expect(sistema.obtenerUsuarios()["Pepe"]).toBeUndefined();
  });

  it("should return true for active user", function() {
      sistema.agregarUsuario("Pepe");
      expect(sistema.usuarioActivo("Pepe")).toBeTrue();
  });

  it("should return false for inactive user", function() {
      expect(sistema.usuarioActivo("Pepe")).toBeFalse();
  });
});
