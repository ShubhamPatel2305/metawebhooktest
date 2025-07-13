# ttfatest Express Webhook Server

This is a simple Express server with two endpoints for webhook verification and event handling, suitable for deployment on Render.

## Endpoints

- `GET /webhook` – For webhook verification (e.g., Facebook/Meta Webhooks)
- `POST /webhook` – For receiving webhook events (e.g., leadgen_id)

## Environment Variables

- `PORT` (optional): Port to run the server (Render sets this automatically)
- `VERIFY_TOKEN`: The token to verify webhook setup requests

## Deployment on Render

1. Push this repo to your GitHub (or connect to Render).
2. Create a new Web Service on [Render](https://render.com/).
3. Set the build and start commands:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Add an environment variable:
   - `VERIFY_TOKEN` = `your_verify_token_here`
5. Deploy!

## Local Development

```bash
cd ttfatest
npm install
VERIFY_TOKEN=your_verify_token_here npm start
```

The server will run on `http://localhost:3000` by default. 