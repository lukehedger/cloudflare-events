import { CloudEvent } from "cloudevents";

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    // Call PublishWorker with CloudEvent
    const result = env.publish.add(1, 2);
    return new Response(result);
  },
};
