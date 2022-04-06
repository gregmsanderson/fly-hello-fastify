# fly-hello-fastify

A sample Fastify application ready to deploy to Fly.io.

## Run it locally

You will need node. You can check the version using `node --version`.

1. Clone this repo
2. Duplicate `.env.example` naming it `.env`
3. Run `npm install` to install its dependencies
4. Run `npm start` to run a local development server

You should be able to visit `http://localhost:3000` and see the hello world JSON.

## Deploy it to Fly

1. Edit the provided `fly.toml` based on your requirements: at least you should change the app's name:

```toml
app = "fly-hello-fastify"
```

2. Run `fly launch`

You should be able to visit `https://your-app-name.fly.dev` and see the hello world JSON.
