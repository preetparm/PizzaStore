const images = import.meta.glob('./*.{png,jpg,jpeg,svg}', { eager: true });

const Images = Object.keys(images).reduce((acc, path) => {
  const key = path.replace('./', '').replace(/\.[^/.]+$/, ''); // Remove path and extension
  acc[key] = images[path].default || images[path]; // Get the default export if it exists
  return acc;
}, {});

export default Images;
