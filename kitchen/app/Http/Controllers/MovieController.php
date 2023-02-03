<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BookmarkMovies;
use App\Helpers\MovieHelper;


class MovieController extends Controller
{
    public function addMovie(Request $request)
    {

        $addedMovie = MovieHelper::addMovieToList($request);

        return $addedMovie;
    }

    public function getUserBookmarkList(Request $request)
    {
        $movieList = MovieHelper::userMovieList($request);


        return $movieList;
    }


}
