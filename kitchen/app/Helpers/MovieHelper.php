<?php

namespace App\Helpers;
use App\Models\BookmarkMovies;


class MovieHelper
{
    public static function addMovieToList($request){
        $userID = auth()->user()->id;

        $fields = $request->validate([
            'title' => "required|string",
        ]);

        $movie = BookmarkMovies::create([
            "title" => $fields['title'],
            "user_id" => $userID
        ]);

    return response([
        "message" => 'Successfully Added ',
        "data" => $movie
    ],200);
    }

    public static function userMovieList($request)
    {
        $movieList = auth()->user()->bookmarkMovieList()->get();

        if($movieList->isEmpty()){
            return response([
                "message" => "Nothing is here",
            ],200);
        }
        return response([
            "message" => "Your Movie List",
            "data" => $movieList
        ],200);
    }

}
