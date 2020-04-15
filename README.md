## Feature flag exercise using LaunchDarkly ##

1. Find the integration SDK key on the LaunchDarkly web console
2. Complete the FeatureFlagService by implementing the interface
3. Add the feature flag `launchdarkly-training.hands-on` to the `'/'` route of the express app
    - Navigate to `http://localhost:3000` and see that it renders a page with a solid colour (blue/green)
    - Try using a default user named `default`. You should see that the page switches between blue and green randomly.
    - Try using a user named `blue`.
    - Try using a user named `green`.