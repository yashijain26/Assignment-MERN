import React from 'react';
import { Engine, Scene } from 'react-babylonjs';
import { Vector3, Color4, Texture } from '@babylonjs/core';
const Cuboid = ({ imageUrl }) => {
 return (
<Engine antialias adaptToDeviceRatio canvasId="sample-canvas">
<Scene clearColor={new Color4(0, 0, 0, 0)}>
<arcRotateCamera
         name="camera1"
         target={new Vector3(0, 1, 0)}
         alpha={-Math.PI / 2}
         beta={(0.5 + Math.PI) / 4}
         radius={2}
         minZ={0.001}
         wheelPrecision={50}
         lowerRadiusLimit={8}
         upperRadiusLimit={10}
       />
<hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
<box name="box" size={2} position={new Vector3(0, 1, 0)}>
<standardMaterial name="mat" diffuseTexture={new Texture(imageUrl)} />
</box>
</Scene>
</Engine>
 );
};
export default Cuboid;
