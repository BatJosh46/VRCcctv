import {getServers} from "./icesettings.js";

export async function getServerConfig() {
  const protocolEndPoint = location.origin + '/config';
  const createResponse = await fetch(protocolEndPoint);
  return await createResponse.json();
}

export function getRTCConfiguration() {
  let config = {};
  config.sdpSemantics = 'unified-plan';
  config.iceServers = [{ urls: ['stun:jersey-current.gl.at.ply.gg:19258'] }];
  return config;
}
