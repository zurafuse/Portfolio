import webbrowser

class Movie():
    """ The movie class provides a skeleton of movies and their properties. """
    VALID_RATINGS = ["G", "PG", "PG-13", "R"]
    
    def __init__(self, movie_title, movie_storyline,
                 poster_image, trailer_youtube, youtube_embed):
        self.title = movie_title
        self.storyline = movie_storyline
        self.poster_image_url = poster_image
        self.trailer_youtube_url = trailer_youtube
        self.embed = youtube_embed

