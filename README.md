
# Full Stack Development 2 - Assignment.

__Name:__ Tibor Molnar

## Features.

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
+ **Other Features Summarised**
    + My Fantasy Movies Page
    + Date Picker
    + additional routings
    + Pressing the home route menu again (home, upcoming...) will load first page
    + Data hyperlinking can be find in actors movies
    + 4 new entities added (popular movies, similar movies, actor, tv show)
    + Cashing used everywhere
    + Sorting criteria that alphabetically sorts movies and tv shows
    + Search bar in similar movies page
    + 17 API endpoints used
   

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

> Shows next page of content using pagination component.

![][tmolnar_popular_pagination]

#### Popular Movies Sort.

> Sorts popular movies alphabetically A-Z or Z-A orders.

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

> Sorts Similar movies alphabetically A-Z or Z-A orders.

![][tmolnar_similar_sort]


#### TV Shows.

> Lists TV Shows from the Popular TV Shows endpoint of TMDB.

![][tmolnar_tvshow]

#### TV Shows Detailed.

> Lists TV Shows from the Popular TV Shows endpoint of TMDB with detailed properties.

![][tmolnar_tvshow_details]

#### TV Show Reviews.

> Lists all the reviews for a particular TV Show (unfortunately no reviews pulled from TMDB).

![][tmolnar_tvshow_reviews]


#### TV SHows Pagination.

> Shows next page of content using pagination component.

![][tmolnar_tvshow_pagination]

#### TV Shows Sort.

> Sorts TV Shows alphabetically A-Z or Z-A orders.

![][tmolnar_tvshow_sort]


#### Actors.

> Lists Actors from the Popular Actors endpoint of TMDB.

![][tmolnar_actors]

#### Actors Detailed.

> Lists Actors from the Popular Actors endpoint of TMDB with details of Actor Biography.

![][tmolnar_actor_bio]

> Lists Actors from the Popular Actors endpoint of TMDB with details of Actor Movies.

![][tmolnar_actor_movies]


#### Fantasy Movies.

> Lists of movies that is user defined.

![][tmolnar_fantasy]

> Date picker for movie release date

![][tmolnar_fantasy_date]


## Routes.


+ /movies/{id} - List of movies from the Discover endpoint.
+ /movies/favourites - Favourite movies in a separate page.
+ /movies/{id} - Detailed information on a specific movie.
+ /movies/upcoming - List of upcoming movies from upcoming endpoint.
+ /movies/popular - A list of popular movies from top rated TMDB endpoint.
+ /movies/similar - A list of similar movies from similar and search TMDB endpoints.
+ /reviews/{id} - The full text of a movie review. 
+ /tvshows - A list of popular TV Shows from tv TMDB endpoint.
+ /tvshow/:id - A particular TV Show details page using tv endpoint.
+ /actors - A list of actors from TMDB popular endpoint.
+ /actor/:id - A specific actor's biography using person endpoint.
+ /actor/:id/movies - A specific actor's movies using person endpoint.
+ /fantasy - Fantasy movie form including fantasy movie list



## Additional Information.

+ Sorting
    + Movies and shows can be sorted alphabetically by title, A-Z or Z-A orders.
+ Pagination
    + All main pages have a pagination numbering at footer.
+ Home Page anchor
    + Pressing the home route menu while on a different page (home, upcoming...) will be loading first page again.
    + This works if a movie page is sorted, after pressing home page route it will un-sort the order.  


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
[tmolnar_tvshow]: ./images/tmolnar_tvshow.jpg
[tmolnar_tvshow_details]: ./images/tmolnar_tvshow_details.jpg
[tmolnar_tvshow_reviews]: ./images/tmolnar_tvshow_reviews.jpg
[tmolnar_tvshow_pagination]: ./images/tmolnar_tvshow_pagination.jpg
[tmolnar_tvshow_sort]: ./images/tmolnar_tvshow_sort.jpg
[tmolnar_actors]: ./images/tmolnar_actors.jpg
[tmolnar_actor_bio]: ./images/tmolnar_actor_bio.jpg
[tmolnar_actor_movies]: ./images/tmolnar_actor_movies.jpg
[tmolnar_fantasy]: ./images/tmolnar_fantasy.jpg
[tmolnar_fantasy_date]: ./images/tmolnar_fantasy_date.jpg
