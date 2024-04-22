// Get targets from KV by topic
// Send event to each target's RPC service binding

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    return new Response("Hello Broadcast!");
  },
};
