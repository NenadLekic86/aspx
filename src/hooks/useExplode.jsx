import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";

import * as THREE from "three";

export const useExplode = (group, { distance = 3, enableRotation = true, isSpacePressed }) => {
  useEffect(() => {
    const groupWorldPosition = new THREE.Vector3();
    group.current.getWorldPosition(groupWorldPosition);

    group.current.children.forEach((mesh) => {
      mesh.originalPosition = mesh.position.clone();
      const meshWorldPosition = new THREE.Vector3();
      mesh.getWorldPosition(meshWorldPosition);

      mesh.directionVector = meshWorldPosition
        .clone()
        .sub(groupWorldPosition)
        .normalize();

      mesh.originalRotation = mesh.rotation.clone();
      mesh.targetRotation = new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
    });
  }, []);

  useEffect(() => {
    group.current.children.forEach((mesh) => {
      mesh.targetPosition = mesh.originalPosition
        .clone()
        .add(mesh.directionVector.clone().multiplyScalar(distance));
    });
  }, [distance]);

  const scrollData = useScroll();

  useFrame(() => {
    group.current.children.forEach((mesh) => {
      // If the spacebar is pressed, animate the meshes based on the scroll offset
      if (isSpacePressed) {
        mesh.position.x = THREE.MathUtils.lerp(
          mesh.originalPosition.x,
          mesh.targetPosition.x,
          scrollData.offset // Use scroll offset to control animation
        );
        mesh.position.y = THREE.MathUtils.lerp(
          mesh.originalPosition.y,
          mesh.targetPosition.y,
          scrollData.offset // Use scroll offset to control animation
        );
        mesh.position.z = THREE.MathUtils.lerp(
          mesh.originalPosition.z,
          mesh.targetPosition.z,
          scrollData.offset // Use scroll offset to control animation
        );

        // Control rotation if enabled
        if (enableRotation) {
          mesh.rotation.x = THREE.MathUtils.lerp(
            mesh.originalRotation.x,
            mesh.targetRotation.x,
            scrollData.offset // Use scroll offset to control rotation
          );
          mesh.rotation.y = THREE.MathUtils.lerp(
            mesh.originalRotation.y,
            mesh.targetRotation.y,
            scrollData.offset // Use scroll offset to control rotation
          );
          mesh.rotation.z = THREE.MathUtils.lerp(
            mesh.originalRotation.z,
            mesh.targetRotation.z,
            scrollData.offset // Use scroll offset to control rotation
          );
        }
      } else {
        // If the spacebar is not pressed, reset meshes to their original positions and rotations
        mesh.position.copy(mesh.originalPosition);
        if (enableRotation) {
          mesh.rotation.copy(mesh.originalRotation);
        }
      }

      // Control visibility based on the scroll offset and spacebar state
      if (scrollData.offset < 0.0001) {
        if (mesh.name === "origin") {
          mesh.visible = true;
        } else {
          mesh.visible = false;
        }
      } else {
        if (mesh.name === "origin") {
          mesh.visible = false;
        } else {
          mesh.visible = true;
        }
      }
    });
  });

  // useFrame(() => {
  //   group.current.children.forEach((mesh) => {
  //     if (scrollData.offset < 0.0001) {
  //       if (mesh.name === "origin") {
  //         mesh.visible = true;
  //       } else {
  //         mesh.visible = false;
  //       }
  //     } else {
  //       if (mesh.name === "origin") {
  //         mesh.visible = false;
  //       } else {
  //         mesh.visible = true;
  //       }
  //     }

  //     mesh.position.x = THREE.MathUtils.lerp(
  //       mesh.originalPosition.x,
  //       mesh.targetPosition.x,
  //       scrollData.offset // 0 at the beginning and 1 after scroll
  //     );
  //     mesh.position.y = THREE.MathUtils.lerp(
  //       mesh.originalPosition.y,
  //       mesh.targetPosition.y,
  //       scrollData.offset // 0 at the beginning and 1 after scroll
  //     );
  //     mesh.position.z = THREE.MathUtils.lerp(
  //       mesh.originalPosition.z,
  //       mesh.targetPosition.z,
  //       scrollData.offset // 0 at the beginning and 1 after scroll
  //     );

  //     if (enableRotation) {
  //       mesh.rotation.x = THREE.MathUtils.lerp(
  //         mesh.originalRotation.x,
  //         mesh.targetRotation.x,
  //         scrollData.offset // 0 at the beginning and 1 after scroll
  //       );
  //       mesh.rotation.y = THREE.MathUtils.lerp(
  //         mesh.originalRotation.y,
  //         mesh.targetRotation.y,
  //         scrollData.offset // 0 at the beginning and 1 after scroll
  //       );
  //       mesh.rotation.z = THREE.MathUtils.lerp(
  //         mesh.originalRotation.z,
  //         mesh.targetRotation.z,
  //         scrollData.offset // 0 at the beginning and 1 after scroll
  //       );
  //     }
  //   });
  // });
};
