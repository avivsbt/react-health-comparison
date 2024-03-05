/**
 *  Goal: Create a food health comparison application
 *
 *  Requirements:
 *  - The UI should display two images side by side, one of a healthy food, and one of an unhealthy food.
 *  - Under the image pair there should be a "score display" which counts user clicks on "healthy" food images.
 *  - Once the user clicked an image, a new pair should appear.
 *  - Pre-loading logic needs to be implemented in order to eliminate bad user experience due to loading time once a session has started (interaction after initial load).
 *  - Basic styling required: gaps between images, and between images and score, centered layout.
 *
 *  API endpoints for image generation:
 *  Healthy food - https://source.unsplash.com/200x200/?healthy-food
 *  Unhealthy food - https://source.unsplash.com/200x200/?unhealthy-food
 *
 *  Optional:
 *    - Error handling
 *    - Loading states
 *    - Healthy/Unhealthy order randomization
 *    - Session reset functionality
 * */

import './App.css';
import ComparisonGame from './ComparisonGame/ComparisonGame';

function App() {
  return <ComparisonGame />;
}

export default App;
