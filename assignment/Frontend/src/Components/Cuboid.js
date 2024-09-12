import React, { useEffect } from 'react';
import { Engine, Scene, ArcRotateCamera, HemisphericLight, MeshBuilder, StandardMaterial, Texture, Vector3 } from '@babylonjs/core';

const Cuboid = ({ textureUrl }) => {
  useEffect(() => {
    const canvas = document.getElementById('babylonCanvas');
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    // Create the BabylonJS engine and scene
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);

    // Set up the camera
    const camera = new ArcRotateCamera('camera', Math.PI / 2, Math.PI / 2.5, 10, Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Set up the light
    const light = new HemisphericLight('light', new Vector3(1, 1, 0), scene);

    // Create the cuboid
    const box = MeshBuilder.CreateBox('box', { size: 2 }, scene);

    // Apply the texture
    const material = new StandardMaterial('material', scene);
    material.diffuseTexture = new Texture(textureUrl, scene);
    box.material = material;

    // Render loop
    engine.runRenderLoop(() => {
      scene.render();
    });

    // Cleanup on component unmount
    return () => {
      engine.dispose();
    };
  }, [textureUrl]);

  return <canvas id="babylonCanvas" style={{ width: '100%', height: '500px' }}></canvas>;
};

export default Cuboid;
