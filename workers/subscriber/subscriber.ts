import { WorkerEntrypoint } from "cloudflare:workers";

export class subscriber extends WorkerEntrypoint {
  async subscribe(event) {
    console.log(`received event: ${event.eventId}`);

    return;
  }
}

export default {
  fetch() {
    return new Response("ok");
  },
};
