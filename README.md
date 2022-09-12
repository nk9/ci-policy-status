# CI Policy Observatory

## How to use

1. Make sure you have Node and npm installed. The modern way is to install [asdf](https://asdf-vm.com/) for tool management, and then the latest version of Node and npm. See [full instructions](https://codechips.me/nodejs-guide-asdf/).
    
  ```sh
  asdf plugin add nodejs
  asdf install nodejs latest 
  ```


2. Clone the repo:

```sh
git clone https://github.com/nk9/ci-policy-status.git
cd ci-policy-status
```


3. Create a .env.local file by copying the .env.local.template file into place and adding the Mapbox token. (Get it from Nick.)

4. Install it and run:

```sh
npm install
npm run dev
```

5. Open a browser to http://localhost:3000 (or whichever link is described in Terminal).

## Details

The project uses [Next.js](https://github.com/vercel/next.js), which is a framework for server-rendered React apps.
It includes `@mui/material` and its peer dependencies, including `emotion`, the default style engine in MUI v5. Learn more about [Material UI](https://mui.com).
For maps, we're using [Mapbox GL GS](https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/) and [react-map-gl](https://github.com/visgl/react-map-gl).

## The link component

The [example folder](https://github.com/mui/material-ui/tree/HEAD/examples/nextjs-with-typescript) provides an adapter for the use of [Next.js's Link component](https://nextjs.org/docs/api-reference/next/link) with MUI.
More information [in the documentation](https://mui.com/material-ui/guides/routing/#next-js).
