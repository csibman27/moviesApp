
# Full Stack Development 2 - Assignment.

__Name:__ Tibor Molnar

## Features.

[A bullet-point list of the features developed for the React SPA app (only new/modified ones for the Movies app),]

+ **List View**
    + Popular
    + Similar
    + Actors
    + TV Shows
+ **Detail view**
    + Popular detailed view with overview, genres, runtime, rate, profit, released
    + Similar detailed view with overview, genres, runtime, rate, profit, released
    + Actors with multiple detailed views, Actor Bio and Actor Movies.
    + TV Shows detailed view with overview, genres, rate, runtime, languages, original name, last air date
+ **Other Features**
    + My Fantasy Movies Page
    + Date Picker
    + additional routings 
    + data hyperlink
    + Pressing the home route menu again (home, upcoming...) will load first page
   

## Feature UI Designs.

[ For each feature listed above, show a screenshot(s) of its UI layout (use appropriate magnification for accessibility). Include a caption with each image.]

e.g. 

#### Popular Movies.

> Lists movies from the Popular Movies endpoint of TMDB.

![][tmolnar_popular]

#### Popular Movies Detailed.

> Lists movies from the Popular Movies endpoint of TMDB with detailed properties.

![][tmolnar_popular_details]

#### Popular Movies Reviews.

> Lists all the reviews for a particular movie (shows text extract only).

![][tmolnar_popular_reviews]

> Click the 'Full Review' link of a review extract to see the review's full text. 

![][image3]

.... other features .......

## Storybook.

[Include a screenshot(s) from the Storybook UI and highlight the stories for new components developed.]

e.g.

![][image5]

## Authentication. (if relevant)

#### Protected routes 

[List all the routes in your app and highlight those that are protected/private (require authentication).]

e.g.

+ /movies - List of 20  movies from the Discover endpoint,
+ /movies/{movie_id} - Detailed information on a specific movie.
+ /reviews/{review_id} (Protected) - The full text of a movie review.
+ /movie/{movie_id}/similar - A list of similar movies. 
+ /person/{person_id} (Protected) - A specific actor's bio.
+ etc
+ etc

#### Protected functionality. (if relevant)

[ Briefly state any app functionality that requires authentication, e.g. only authenticated users can tag a movie as a 'favourite'.]

#### Supabase (if relevant)

[Include a screenshot(s) from your Supabase account that verifies its use for this app. ]

## Deployment (if relevant).

[Specify the URL of your deployed app and include a screenshot(s) from your deployment platform account (e.g. Vercal) that verifies its use for this app. Set up a registered user for your app and specify their credentials.

Username: test1 ; Password: pass1
]

## Persistence (if relevant).

[If you are persisting data to the Supabase backend (e.g. favourite movies, fantasy movie), include screenshots with appropriate captions to verify this aspect. ]

## Additional Information.

+ Sorting
    + Data can be sorted alphabetically by title, and also by release date using checkboxes.
+ Pagination

[ Briefly explain any other aspects of your app's design or implementation that is non-standard and worthy of mention.]

[image1]: ./images/image1.png
[image2]: ./images/image2.png
[image3]: ./images/image3.png
[image4]: ./images/image4.png
[image5]: ./images/image5.png