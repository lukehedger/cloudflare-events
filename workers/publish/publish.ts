// Accept CloudEvent
// Call BroadcastWorker with topic and message

import { WorkerEntrypoint } from "cloudflare:workers";

export class publish extends WorkerEntrypoint {
  async add(a, b) {
    return a + b;
  }
}

export default {
  fetch() {
    return new Response("ok");
  },
};
