import React, { useEffect } from 'react';
import { Engine, Scene, useBeforeRender } from 'react-babylonjs';
import { Vector3 } from '@babylonjs/core';

function BabylonComponent({ image }) {
  return (
    <Engine antialias adaptToDeviceRatio canvasId="sample-canvas">
      <Scene>
        <arcRotateCamera name="camera" target={new Vector3(0, 1, 0)} alpha={Math.PI / 2} beta={Math.PI / 4} radius={5} />
        <hemisphericLight name="light1" direction={Vector3.Up()} />
        <box name="box" size={2}>
          <standardMaterial name="boxMaterial">
            <texture url={image} assignTo="diffuseTexture" />
          </standardMaterial>
        </box>
      </Scene>
    </Engine>
  );
}

export default BabylonComponent;
