# Github Searcher
 It is a simple react app for search github repos and users, in the next few line i will explain aprts of the project and how it works why i choosed  specific approaches.
 
 # Handling debounce
 For Handling debounce durwing user wrirte i used library called **Awesome debounce promise** https://github.com/slorber/awesome-debounce-promise, instead of including the whole lodash library for simple task like this.
 
 If user starts typing then removed all the characters I have a situation that i need to cancel the debounced promise for example if user typed 5 characters which means there is a http request should sent then user decide to delete all the chraracter,I faced  a stuation to cancel the promise for this i used library called **Awsome imperative promise** which wrap a promise and adds a cancel handler for it.
 
 # Api requests and error handling
 I used **Axios** for api requests, i created high level interceptor which include the base url for github, also i intercept responses and check if it has error message i show it as toast message for the user.
 
 # Store management
 I used **redux**, **redux-persist** and **redux-thunk** to handle store management, i store all app data in the store, like the search terms and search results, so if the app refreshed or closed I save the last app state. also using redux thunk for custom middleware to save the terms and result inside a dispatched action that apply the api call, so i keep the my app state separated from the view, so basicly the update happen according to this steps:
 User dispatch action -> action update store (through api call for search) -> user get the new app state (on the UI)

# User interface 
the UI for the app was simple but to keep the aligment at a perfect point i used **flex box** and **css grid** I used flex box to make sure the empty state is 100% cenetered no mater what is the screen size, also used css grid to present search result cards so it will match any screen size with flexibility snd maintain itself. also i used `calc()` css method in few places to keep my dimentions accurate.
