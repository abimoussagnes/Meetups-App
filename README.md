# Meetups App

A React app for displaying, adding and favoriting meetups. This repository was bootstrapped with Create React App and contains a small set of pages to list meetups, add a new meetup (UI only), and view favorites.

**Quick Links**
- **Source:** `src/`
- **Pages:** `src/Pages/AllMeetups.js`, `src/Pages/AddMeetup.js`, `src/Pages/Favorites.js`

**Tech stack**
- React (Create React App)
- React Router (`react-router-dom`)

**Features (current)**
- List sample meetups in a responsive 3-column grid (`All Meetups`).
- Toggle favorites from meetup cards and view them on the `Favorites` page.
- Add Meetup form UI (not yet wired to persist data).


**Project structure (important files)**
- `src/App.js` — routes and top-level state (favorites are lifted here).  
- `src/Pages/AllMeetups.js` — home page listing meetups.  
- `src/Pages/AddMeetup.js` — form UI to add meetups.  
- `src/Pages/Favorites.js` — favorites list and remove action.  
- `src/components/Card.js` — presentational card for a meetup.  
- `src/components/Card.css`, `src/Pages/AllMeetups.css`, `src/Pages/Favorites.css`, `src/Pages/AddMeetup.css` — styling.
```

**Run locally**

Follow these steps to run the project locally (works on Windows, macOS and Linux):

1. Clone the repository and change into the project folder:

```bash
git clone https://github.com/abimoussagnes/Meetups-App.git
cd meetups-test
```

2. Make sure you have Node.js installed (recommended: Node 16+ or 18+). Verify with:

```bash
node --version
```

3. Install dependencies:

```bash
npm install
# or, if you prefer yarn:
# yarn install
```

4. Start the development server:

```bash
npm start
# or with yarn:
# yarn start
```

5. Open your browser at `http://localhost:3000`.

**Contribution**
- Fork the repo, create a feature branch, and open a pull request. I recommend adding tests for any new logic and making sure styles are responsive.
