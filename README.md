# User-card widget

The application allows you to render user cards from various social networks.
Will be useful as a widget on the site

Example cards created for Twitter, but can be adapted for any social network

### The user-card consists of

- Decorative part (ImageBlock component)
- User information (UserWrap component),inside of which
  > Client's avatar o Statistical information about the number of tweets,
  > followers Button with the ability to subscribe

### Functionality:

- When the page first loads, the user's card is displayed with data about
  tweets/subscribers taken from the basic data about the user
- When you click on the button, the number of subscribers will be updated in the
  database (now it is implemented through Local Storage), and the button's color
  will be changed.
- When the page is refreshed, the number of subscribers and subscription status
  is loaded from the database / Local Storage
