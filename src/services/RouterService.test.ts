import RouterService from "./RouterService";

describe("RouterService", () => {
  test("can manage route with path variable", () => {
    // Arrange
    const windowMock = { location: { hash: "" } } as any;
    const service = RouterService(windowMock);

    // Act
    service.setRoutes(["/users/{userId}/friends/{friendId}"]);
    service.setPath("/users/123/friends/456");

    // Assert
    expect(service.getParams().userId).toBe("123");
    expect(service.getParams().friendId).toBe("456");
    expect(service.getCurrentRoute()).toBe(
      "/users/{userId}/friends/{friendId}"
    );
    expect(service.getCurrentPath()).toBe("/users/123/friends/456");
    expect(windowMock.location.hash).toBe("#/users/123/friends/456");
  });

  test("can load route from window.location.hash", () => {
    // Arrange
    const windowMock = { location: { hash: "#/users/123/friends/456" } } as any;
    const service = RouterService(windowMock);

    // Act
    service.setRoutes(["/users/{userId}/friends/{friendId}"]);

    // Assert
    expect(service.getParams().userId).toBe("123");
    expect(service.getParams().friendId).toBe("456");
    expect(service.getCurrentRoute()).toBe(
      "/users/{userId}/friends/{friendId}"
    );
    expect(service.getCurrentPath()).toBe("/users/123/friends/456");
    expect(windowMock.location.hash).toBe("#/users/123/friends/456");
  });
});
