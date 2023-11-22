fetch("../data/modeldata.json")
  .then((response) => response.json())
  .then((data) => {
    const scene = document.querySelector("a-scene");
    const assets = document.createElement("a-assets");
    scene.appendChild(assets);

    data.forEach((item) => {
      // Create an asset item for the 3D model
      let assetItem = document.createElement("a-asset-item");
      assetItem.setAttribute("id", item.id);
      assetItem.setAttribute("src", item.modelSrc);
      assets.appendChild(assetItem);

      // Create a marker
      let marker = document.createElement("a-marker");
      marker.setAttribute("type", "pattern");
      marker.setAttribute("url", item.markerPattern);

      // Create an entity for the 3D model
      let entity = document.createElement("a-entity");
      entity.setAttribute("gltf-model", "#" + item.id);
      entity.setAttribute("scale", item.scale);
      entity.setAttribute("position", item.position);
      entity.setAttribute("rotation", item.rotation);

      // Append entity to marker
      marker.appendChild(entity);

      // Append marker to scene
      scene.appendChild(marker);
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));