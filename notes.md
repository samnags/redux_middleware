Determining whether search bar is component or container
- Our search bar has to be able to modify state through actions.
- Thus is going to need to be a container so it can talk to Redux

Will our city list need to be a container or component?
- Renders list of cities so it  needs access to get that list
- Thus it will be a container




1) A user enters in a city and press submit
2) There is an action creator attached to the button's onSubmit
3) The action creator makes an AJAX request using the user's search term
4) The action creator returns an action with a payload of the AJAX promise
5) The middleware stops that action, waits for it to resolve and then returns the action with a payload of the resolved action
6) The reducer receives the action and if the case line up, it copies the state and adds the new search to the array of cities
