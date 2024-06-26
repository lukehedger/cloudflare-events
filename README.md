# cloudflare-events

Cloudflare-native event bus built on Workers, Workers KV and RPC Service Bindings

## Contributing

### Install dependencies

```sh
npm install
```

### Run workers locally

Run workers locally using `wrangler dev`. Each worker needs to be run in isolation:

```sh
npm run dev --workspace=WORKER_NAME
```

For example, to run the `bus` worker locally:

```sh
npm run dev --workspace=bus
```

### Generate worker types

Generate types for all workers using `wrangler types`:

```sh
npm run types --workspaces
```

### Deploy workers

Deploy all workers to your Cloudflare account using `wrangler deploy`:

```sh
npm run deploy --workspaces
```
