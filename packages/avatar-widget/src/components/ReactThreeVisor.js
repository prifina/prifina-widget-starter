import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as THREE from "three";
import { backgroundColor } from "styled-system";
// let OrbitControls = require("three-orbit-controls")(THREE);
let FBXLoader = require("three-fbxloader-offical");

function ReactThreeVisor({
  url,
  backgroundColor,
  cameraPosition,
  // angle,
  // far,
  // near,
  onError,
  onLoading,
  ouraScore,
}) {
  const container = useRef(null);

  const angle = 25;
  const far = 1000;
  const near = 6;
  const lights = null;

  const clock = new THREE.Clock();
  const camera = new THREE.PerspectiveCamera(angle, 30 / 30, near, far);
  const scene = new THREE.Scene();
  const sceneBackground = new THREE.Color(backgroundColor || 0xffffff);
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  let mixers = [];

  const animate = () => {
    requestAnimationFrame(animate);
    if (mixers.length > 0) {
      for (var i = 0; i < mixers.length; i++) {
        mixers[i].update(clock.getDelta());
      }
    }
    renderer.render(scene, camera);
  };
  const init = () => {
    // Camera
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);

    // Scene
    scene.background = sceneBackground;

    // Light
    let light = new THREE.HemisphereLight(0xffffff, 0x444444);
    light.position.set(0, 200, 0);
    scene.add(light);
    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 200, 100);
    light.castShadow = true;
    light.shadow.camera.top = 180;
    light.shadow.camera.bottom = -100;
    light.shadow.camera.left = -120;
    light.shadow.camera.right = 120;
    light = new THREE.DirectionalLight(0xffffff);
    scene.add(light);
    light = new THREE.AmbientLight(0x222222);
    scene.add(light);

    // model
    if (url !== undefined) {
      let loader = new FBXLoader();
      loader.load(
        url,
        (object) => {
          object.mixer = new THREE.AnimationMixer(object);
          if (object.mixer) {
            mixers.push(object.mixer);
          }

          if (object.animations[0]) {
            let action = object.mixer.clipAction(object.animations[0]);
            action.play();
          }

          object.traverse(function (child) {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
          console.log("object", object);
          scene.add(object);
        },
        (s) => {
          handleLoad(s);
        },
        (error) => {
          handleError(error);
        }
      );
    }

    // Renderer
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(290, 290);
    container.current.replaceChildren(renderer.domElement);
    animate();
  };

  const handleLoad = (e) => {
    // if (onLoad) {
    //   onLoading(e);
    // }
  };

  const handleError = (e) => {
    // if (onError) {
    //   onError(e);
    // }
  };

  useEffect(() => {
    console.log("component mounted");

    init();

    // if (prevProps.shouldRerender !== this.props.shouldRerender) {
    //   this.container.replaceChildren(this.renderer.domElement);
    // }
  }, [ouraScore]);

  console.log("should render state", ouraScore);
  console.log("react visor color", backgroundColor);
  return (
    <div
      style={{
        width: 290,
        height: 290,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      ref={container}
    ></div>
  );
}
export default ReactThreeVisor;
