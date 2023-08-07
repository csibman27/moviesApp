
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

![][tmolnar_popular_fullr]

#### Popular Movies Pagination.

> Shows next page of content using pagination component

![][tmolnar_popular_pagination]

#### Popular Movies Sort.

> Sorts popular movies alphabetically A-Z or Z-A orders

![][tmolnar_popular_sort]


#### Similar Movies.

> Lists movies from the Similar Movies endpoint of TMDB. (using search movie endpoint)

![][tmolnar_similar]

#### Similar Movies Detailed.

> Lists movies from the Similar Movies endpoint of TMDB with detailed properties.

![][tmolnar_similar_details]

#### Similar Movies Reviews.

> Lists all the reviews for a particular movie (shows text extract only).

![][tmolnar_similar_reviews]

> Click the 'Full Review' link of a review extract to see the review's full text. 

![][tmolnar_similar_fullr]

#### Similar movies pagination was not required as the result of movies are always less then a page

#### Similar Movies Sort.

> Sorts Similar movies alphabetically A-Z or Z-A orders

![][tmolnar_similar_sort]


#### TV Shows.

> Lists TV Shows from the Popular TV Shows endpoint of TMDB.

![][tmolnar_tvshow]

#### TV Shows Detailed.

> Lists TV Shows from the Popular TV Shows endpoint of TMDB with detailed properties.

![][tmolnar_tvshow_details]

#### TV Show Reviews.

> Lists all the reviews for a particular movie (shows text extract only).

![][tmolnar_popular_reviews]

> Click the 'Full Review' link of a review extract to see the review's full text. 

![][tmolnar_popular_fullr]

#### Popular Movies Pagination.

> Shows next page of content using pagination component

![][tmolnar_popular_pagination]

#### Popular Movies Sort.

> Sorts popular movies alphabetically A-Z or Z-A orders

![][tmolnar_popular_sort]



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
    + Movies and shows can be sorted alphabetically by title, A-Z or Z-A orders.
+ Pagination
    + All main pages have a pagination numbering at footer.

[ Briefly explain any other aspects of your app's design or implementation that is non-standard and worthy of mention.]

[image1]: ./images/image1.png
[image2]: ./images/image2.png
[image3]: ./images/image3.png
[image4]: ./images/image4.png
[image5]: ./images/image5.png
[tmolnar_popular]: ./images/tmolnar_popular.jpg
[tmolnar_popular_details]: ./images/tmolnar_popular_details.jpg
[tmolnar_popular_reviews]: ./images/tmolnar_popular_reviews.jpg
[tmolnar_popular_fullr]: ./images/tmolnar_popular_fullr.jpg
[tmolnar_popular_pagination]: ./images/tmolnar_popular_pagination.jpg
[tmolnar_popular_sort]: ./images/tmolnar_popular_sort.jpg
[tmolnar_similar]: ./images/tmolnar_similar.jpg
[tmolnar_similar_details]: ./images/tmolnar_similar_details.jpg
[tmolnar_similar_reviews]: ./images/tmolnar_similar_reviews.jpg
[tmolnar_similar_fullr]: ./images/tmolnar_similar_fullr.jpg
[tmolnar_similar_sort]: ./images/tmolnar_similar_sort.jpg
