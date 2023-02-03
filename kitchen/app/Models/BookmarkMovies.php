<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class BookmarkMovies extends Model
{
    use HasFactory;

    public function bookmarkMovies()
    {
        return $this->belongsTo(User::class);
    }
}
