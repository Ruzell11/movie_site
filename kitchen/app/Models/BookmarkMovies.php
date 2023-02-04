<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookmarkMovies extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title'


    ];

    //Relationship with user
    public function user(){
        return $this->belongsTo(User::class , 'user_id');
    }
}
