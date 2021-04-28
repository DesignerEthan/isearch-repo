# iSearch - iTunes search and favourite api

Search the iTunes library and add items to your favourites list. Simply type into the search box what you looking for, filter by media type and submit. From the results you can click the add to favourites button. If an item is already in your favourites you can click the remove from favourites button.

## Installation

cd into the root and run npm install then cd into the frontend folder inside the root and run npm install. Once installed run npm start in the root and frontend folder.

```
npm install 
npm start
```

## Usage

The express endpoint is set to port 3001. Navigate localhost:3001/search to get a default return.

```
http://localhost:3001/search
```

You can filter by keywords by add the url parameter term and filter by type by adding the url parameter media.

```
http://localhost:3001/search?term=postmalone&media=music
```

## Security

This API does not require any API keys. I have included a test using mocha and chai on the express backend plus a snapshot and fetch test using jest for the frontend. Helmet has also been included on the express backend.

## Demo URL

...
