import React, { useEffect, useRef, useState } from 'react';
import ROSLIB from 'roslib';
import * as ROS3D from 'ros3d';

import Toggle from './Toggle';
import VisualizerOverlay from './VisualizerOverlay';

const Visualizer = () => {
  const viewerRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setDimensions({ width, height });
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

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
      width: dimensions.width,
      height: dimensions.height,
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
    <div 
      ref={containerRef} 
      style={{
        width: '100%',
        height: '100%',
        position: 'relative' // overlay positioning
      }}
    >
      <Toggle title="Overlay">
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