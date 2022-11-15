import * as THREE from 'three'
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { ephemeralDOMStore } from '../dom'

/** Downloads and parses a .gltf (text) or .glb (binary) file. The model will be resized if the `height` argument is a number. */
const loadGLTF = async (filepath: string, height: number | null): Promise<THREE.Object3D> => {
    const obj = (await new Promise<GLTF>((resolve, reject) => new GLTFLoader().load(filepath, resolve, (xhr) => { ephemeralDOMStore.getState().setLoadingMessage(filepath, `Loading ${filepath} (${xhr.loaded}/${xhr.total})`) }, reject)))
        .scene.children[0]!.children[0]!
    ephemeralDOMStore.getState().removeLoadingMessage(filepath)
    if (height !== null) {
        obj.scale.multiplyScalar(height / new THREE.Box3().setFromObject(obj).getSize(new THREE.Vector3()).y)
    }
    return obj
}

export default loadGLTF

export const lazyLoadGLTF = (filepath: string, height: number | null): THREE.Object3D => {
    const container = new THREE.Object3D()
    loadGLTF(filepath, height).then((m) => container.add(m)).catch(console.error)
    return container
}
