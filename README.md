# Semicircle Project

This project demonstrates a simple interactive UI component consisting of a semicircle with three points (A, B, C) and a moveable button. The button starts at point A and can be moved to points B and C based on user interactions. The button's position and behavior change based on hover and click events.

## Running the Project

1. **Install Dependencies:**

   npm install

## How It Works

1. **Initial Load:**

   - The move button starts at point A below the semicircle.

2. **Hover Events:**

   - When the user hovers over point A, B, or C, the button moves to the corresponding position below the semicircle.

3. **Click Events:**
   - By default the Move button is present at Point A below it
   - When the user clicks the move button,and enter some point from(a,b,c) it moves above the semicircle and at that point.
   - Also An alert is shown indicating the location current point.
   - A prompt is shown asking the user to enter a new position (a, b, or c) where they want to move.
   - The button moves to the new position if a valid input is provided otherwise stays at that location .

## Project Structure

- `src/`
  - `components/`
    - `MoveButton.js`: Component for the moveable button.
    - `MoveButton.css`: Styles for the moveable button.
    - `Semicircle.js`: Component for the semicircle and points.
    - `Semicircle.css`: Styles for the semicircle and points.
  - `App.js`: Main application component.
  - `App.css`: Styles for the main application.
  - `index.js`: Entry point for the React application.
  - `index.css`: Global styles for the application.

## Components

### MoveButton.js

This component renders a button that can move between points A, B, and C. The button's position and z-index are controlled by the `position` and `isClicked` props.

- **Props:**
  - `position`: The current position of the button (`a`, `b`, or `c`).
  - `onClick`: Function to handle the button click event.
  - `isClicked`: Boolean indicating if the button has been clicked.

### Semicircle.js

This component renders the semicircle and the three points (A, B, C). It manages the state of the button's position and whether it has been clicked.

- **State:**

  - `position`: The current position of the button (`a`, `b`, or `c`).
  - `isClicked`: Boolean indicating if the button has been clicked.

- **Handlers:**
  - `handleClick`: Handles the button click event, showing an alert and prompt to change the button's position.

### App.js

The main application component that renders the `Semicircle` component.

## Styles

### MoveButton.css

Defines the styles for the moveable button, including its position and z-index based on its state.

### Semicircle.css

Defines the styles for the semicircle and points, ensuring proper alignment and positioning.

### App.css

Defines the global styles for the main application, centering the content and setting the background color.
