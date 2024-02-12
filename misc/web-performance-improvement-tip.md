# Note
This is in progress please put ideas or things that you want to cover here: https://github.com/apurbalal/heyitsapu/discussions/4

# [In Progress] Web performance improvement tip
<img width="731" alt="Screen Shot 2024-02-12 at 20 05 53" src="https://github.com/apurbalal/heyitsapu/assets/9425881/d7e2fc7c-316d-4faa-9421-17b072e31eb1">


## Things that matter
1. LCP - Largest contentful paint
2. FID - First input delay
3. TBT - Total blocking time
4. CLS - Cumulative layout shift

Lets discuss each one by one.
Note: I will discuss in terms of React and Next.js plus other libraries but it will apply to all website in one or other way so Please read it. 

## LCP - Largest contentful paint
### First check what's LCP in your case
1. Run a lighthouse test on your website, desktop and mobile and first identify which component is LCP component in different scenarios
- Logged in User
- Logged out User
- Desktop
- Mobile
- Page route - Home, Auth etc.
2. Once you identify it check what is causing delay.
- Client side rendering.
- Unnecessary script loading taking more priority.
- Images are not optimized.
- Script loading strategy

### Things you can do
- Load render blocking resources with higher priority - app js, global CSS, fonts.
- Prefer Static Site Generation, Incrementtal Static site generation or Server side rendering for better SEO 
  and the page will be rendered server side so all necessary html components will be there already.
- Consider better split strategy using webpack or other js bundlers.
- Cache static assets on CDN and in user machine. You can customize client side cache more using service workers.
- Prefer Avif, Webp, and use image source set (https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

## FID - First input delay
### Things you can try
1. If you have lot of event listeners consider event delegation technique. Which will reduce number of event listeners.
2. If you are using React consider loading non-important components such as modals, footer etc with dynamic import and wrap it with suspense so that you can save on hydration and initial script load and react will hydrate the other parts of the components first.

## TBT - Total blocking time
### Check what is causing more TBT
1. First check what is causing red blocks. Run performance porifling + load page <img width="508" alt="Screen Shot 2024-02-12 at 19 48 02" src="https://github.com/apurbalal/heyitsapu/assets/9425881/4c3cd46a-98b7-442a-84ed-b06216567193">

### Things you can do
1. If the red blocks are due to evaluate script check if you can improve chunk split strategy of the bundler to create smaller chunk. Use dynamic import strategy for non-important components - example Footer <img width="615" alt="Screen Shot 2024-02-12 at 19 49 14" src="https://github.com/apurbalal/heyitsapu/assets/9425881/400c4f20-3a44-45f6-b836-753f7133eb81">
2. If the red blocks are due to third party scripts - Consider using async or defer tag.
3. You can also run third party scripts in web worker - https://partytown.builder.io/
   
