import { WorkerEntrypoint } from "cloudflare:workers";

export class bus extends WorkerEntrypoint {
  async publish(event) {
    await this.env.subscriber.subscribe(event);

    return event.eventId;
  }
}

export default {
  fetch() {
    return new Response("ok");
  },
};
