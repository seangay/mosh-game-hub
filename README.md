# Overview

This is a learning repo for an example application build using:

- [React](https://react.dev/)
- [Chakra ui](https://v2.chakra-ui.com/): For front end styling and components.
- [Vite](https://vitejs.dev/): Build tool which is building in popularity it seems

## Prerequisites

As this is a learning app I am not putting too much detail into securing keys
etc, but I have added `.env.local` locally to contain the API key for the [rawg.io](https://rawg.io/apidocs) being used.

Creating a key is pretty simple and currently allows 20,000 requests per month on the free plan.

content for this file is

```
VITE_RAWG_API_KEY=ADD_YOUR_OWN_KEY_HERE
```

So create the file locally, save what is above into that file and restart the server.

## Running the app

```
git clone https://github.com/seangay/mosh-game-hub.git
cd mosh-game-hub
npm install
npm run dev
```

Then open a browser to the app on http://localhost:5173

## Deployment

I have set up automatic deployment to vercel which is currently configured to build and deploy on commits.

The site has been deployed to [Ogre's Game Hub](https://ogre-game-hub.vercel.app/) for viewing.

### Considerations

Having the API key for RAWG deployed with the app isn't ideal for security purposes.

Given that this is a learning exercise, I am not too concerned with the implementation. I have used [vercel's Environment Variables](https://vercel.com/docs/projects/environment-variables) to store the API key as a
