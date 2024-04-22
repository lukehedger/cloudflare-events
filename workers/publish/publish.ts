// Accept CloudEvent
// Call BroadcastWorker with topic and message

import { WorkerEntrypoint } from "cloudflare:workers";

export default class extends WorkerEntrypoint {
  add(a, b) {
    return a + b;
  }
}
