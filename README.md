
Video Link :- https://drive.google.com/file/d/1jkhQVc-mCFvJG_UTvj5WvCSIbIOG__gP/view?usp=drive_link

# JavaScript Slider

A simple, responsive image slider (carousel) built with vanilla HTML, CSS, and JavaScript. Supports manual navigation with prev/next buttons and auto-advances every few seconds.

## Features

- ❮ / ❯ buttons to manually navigate between images
- Auto-play — automatically advances to the next image every 3 seconds
- Wraps around seamlessly (loops back to the first/last image)
- Rounded, responsive slider container with a blurred background
- No dependencies — pure HTML/CSS/JS

## Project Structure

```
.
├── index.html   # Markup for the slider
├── style.css    # Styling for the slider and page
└── script.js    # Slider logic (navigation + auto-play)
```

## Getting Started

1. Clone or download this repository.
2. Open `index.html` in your browser — no build step or server required.

## How It Works

- `script.js` holds an array of image URLs and an `index` pointer to the current image.
- Clicking **next** increments the index (wrapping to `0` at the end); clicking **prev** decrements it (wrapping to the last image).
- `setInterval` calls the same "next" logic every 3000ms for auto-play.
- The `<img>` element's `src` is updated to `images[index]` on every change.

## Customization

- **Change images:** edit the `images` array in `script.js`.
- **Change slide size:** edit `.slider` width/height in `style.css`.
- **Change auto-play speed:** edit the `3000` (milliseconds) value in the `setInterval` call in `script.js`.
- **Disable auto-play:** remove or comment out the `setInterval` block in `script.js`.

## License

Free to use and modify for personal or educational projects.
