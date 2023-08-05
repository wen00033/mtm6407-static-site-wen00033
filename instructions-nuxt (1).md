## Installation
1. In the terminal, install nuxt
```
npx nuxi@latest init <project-name>
```

2. In the folder's project, Install dependencies
```
cd <project-name>
npm install
```

3. Start the development server
```
npm run dev
```

## Components
Remove the welcome page and create a custom component
1. Create the `components` folder
2. Inside components folder, create a component
3. In the main component app.vue, call your component

## Pages
1. Create the `pages` folder
2. Inside the pages folder, create the index.vue as the home page
3. In the main component app.vue, call the `<NuxtPage />` built-in component

## Navigation
1. Define links using the built-in component `<NuxtLink>`
```
<NuxtLink to="/">Home</NuxtLink>
```

## Route Parameters
1. Create a link with a parameter (dynamic segment)
```
<NuxtLink :to="`/pokemon/${ 1 }`" >Pokemon</NuxtLink >
```
2. Create the virtual page (route) that receives the parameter
> pages/pokemon/[id].vue
```
<template>
    <h1>This is my pokemon route with the parameter {{ $route.params.id }}</h1>
    <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ $route.params.id }.png`" alt="pokemon sprite">
</template>
```

## Layouts
1. Create the `layouts` folder
2. Inside the layouts folder, create the default.vue layout
```
<template>
    <header>
        <nav>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink :to="`/pokemon/${1}`" >Pokemon</NuxtLink ></li>
            </ul>
        </nav>
    </header>  
    <slot />
</template>
```
3. In the main component app.vue, call the `<NuxtLayout >` built-in component
```
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```
4. Create a custom layout

## Netlify deployment
1. Initialize your git project, and publish your project in github
2. In Netlify, import an existing GitHub project
3. Deploy

## GitHub pages deployent
1. Define the base path for the project
> nuxt.config.ts
```
app: {
  baseURL: '/myNuxtProject/' // baseURL: '/<repository>/'
}
```
2. Generate a static version of your site
```
npm run generate
```
3. Copy/Move the 'dist' folder and publish/deploy it in GitHub 

