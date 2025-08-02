// import React, { useEffect, useRef } from 'react';
// import ROSLIB from 'roslib';
// import * as ROS3D from 'ros3d';

// const Visualizer = () => {
//   const viewerRef = useRef(null);

//   useEffect(() => {
//     const ros = new ROSLIB.Ros({
//       url: 'ws://localhost:9090', // adjust
//     });

//     ros.on('connection', () => {
//       console.log('Connected to ROS');
//     });

//     ros.on('error', (error) => {
//       console.error('ROS error:', error);
//     });

//     ros.on('close', () => {
//       console.log('Connection to ROS closed');
//     });

//     if (!viewerRef.current) {
//       return;
//     }

//     const viewer = new ROS3D.Viewer({
//       divID: viewerRef.current.id,
//       width: 500,
//       height: 500,
//       antialias: true,
//       fixedFrame: 'scene',
//     });

//     viewer.addObject(new ROS3D.Grid());
//     viewer.camera.position.set(2, 2, 2);

//     const tfClient = new ROSLIB.TFClient({
//       ros,
//       fixedFrame: 'panda_link0',
//       angularThres: 0.01,
//       transThres: 0.01,
//       rate: 10.0,
//     });

//     const urdfClient = new ROS3D.UrdfClient({
//       ros,
//       tfClient,
//       path: 'https://raw.githubusercontent.com/Wisc-HCI/panda-primitives/master/', // not accessible outside of container
//       rootObject: viewer.selectableObjects,
//       loader: ROS3D.COLLADA_LOADER_2,
//     });

//     const tfMarkerClient = new ROSLIB.TFClient({
//       ros,
//       fixedFrame: '/scene',
//       angularThres: 0.01,
//       transThres: 0.01,
//       rate: 10.0,
//     });

//     const imClient = new ROS3D.InteractiveMarkerClient({
//       ros,
//       tfClient: tfMarkerClient,
//       topic: '/scene/object_controls',
//       camera: viewer.camera,
//       rootObject: viewer.selectableObjects,
//     });

//     // clean up
//     return () => {
//       tfClient.dispose();
//       tfMarkerClient.dispose();
//       if (viewerRef.current) {
//         viewerRef.current.innerHTML = ''; // wipe canvas
//       }
//     };
//   }, []);

//   return (
//     <div
//       id="ros3d-viewer"
//       ref={viewerRef}
//       style={{ height: '500px', width: '500px' }}
//     />
//   );
// };

// export default Visualizer;

import React, { useEffect, useRef } from 'react';
import ROSLIB from 'roslib';
import * as ROS3D from 'ros3d';

import Toggle from './Toggle';
import VisualizerOverlay from './VisualizerOverlay';

const Visualizer = () => {
  const viewerRef = useRef(null);

  useEffect(() => {
    const ros = new ROSLIB.Ros({
      url: 'ws://localhost:9090', // adjust
    });

    ros.on('connection', () => {
      console.log('Connected to ROS');
    });

    ros.on('error', (error) => {
      console.error('ROS error:', error);
    });

    ros.on('close', () => {
      console.log('Connection to ROS closed');
    });

    if (!viewerRef.current) {
      return;
    }

    const viewer = new ROS3D.Viewer({
      divID: viewerRef.current.id,
      width: 500,
      height: 500,
      antialias: true,
      fixedFrame: 'scene',
    });

    viewer.addObject(new ROS3D.Grid());
    viewer.camera.position.set(2, 2, 2);

    const tfClient = new ROSLIB.TFClient({
      ros,
      fixedFrame: 'panda_link0',
      angularThres: 0.01,
      transThres: 0.01,
      rate: 10.0,
    });

    const urdfClient = new ROS3D.UrdfClient({
      ros,
      tfClient,
      path: 'https://raw.githubusercontent.com/Wisc-HCI/panda-primitives/master/', // not accessible outside of container
      rootObject: viewer.selectableObjects,
      loader: ROS3D.COLLADA_LOADER_2,
    });

    const tfMarkerClient = new ROSLIB.TFClient({
      ros,
      fixedFrame: '/scene',
      angularThres: 0.01,
      transThres: 0.01,
      rate: 10.0,
    });

    const imClient = new ROS3D.InteractiveMarkerClient({
      ros,
      tfClient: tfMarkerClient,
      topic: '/scene/object_controls',
      camera: viewer.camera,
      rootObject: viewer.selectableObjects,
    });

    // clean up
    return () => {
      tfClient.dispose();
      tfMarkerClient.dispose();
      if (viewerRef.current) {
        viewerRef.current.innerHTML = ''; // wipe canvas
      }
    };
  }, []);

  return (
    <div style={{
      border: '1px solid #444',
      borderRadius: '0.5rem',
      padding: '1rem',
      width: '100%',
      height: '100%',
      backgroundColor: '#111',
      position: 'relative' // overlay positioning
    }}>
      <Toggle title="Controls">
        <VisualizerOverlay />
      </Toggle>
      <div
        id="ros3d-viewer"
        ref={viewerRef}
        style={{ height: '100%', width: '100%', backgroundColor: 'black' }}
      />
    </div>
  );
};

export default Visualizer;