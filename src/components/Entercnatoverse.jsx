import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
  const { unityProvider, isLoaded, loadingProgression, requestFullscreen } = useUnityContext({
    loaderUrl: "gallery/build/Test.loader.js",
    dataUrl: "build/Test.data",
    frameworkUrl: "build/Test.framework.js",
    codeUrl: "build/Test.wasm",
  });

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }

  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <div className="container">
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div className="loading-overlay flex items-center justify-center">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity unityProvider={unityProvider} style={{ width: 1100, height: 700 }} />
      <button onClick={handleClickEnterFullscreen}>Enter Fullscreen</button>
    </div>
  );
  }

export default Game;