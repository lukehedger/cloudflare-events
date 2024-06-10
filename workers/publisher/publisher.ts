export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const result = await env.bus.publish({ eventId: "123" });

    return new Response(result);
  },
};
