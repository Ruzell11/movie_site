<?php

use App\Http\Controllers\DropDownValuesController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MovieController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Public Routes
Route::get('/dropdown', [DropDownValuesController::class, 'index']);
Route::post('/register-user', [UserController::class, 'registerUser']);
Route::post('/login-user', [UserController::class, 'loginUser']);



// Protected Routes
Route::group(['middleware' => ['auth:sanctum']] , function () {
    Route::get('/get-user-data', [UserController::class, 'getSingleUserData']);
    Route::patch('/update-user', [UserController::class, 'updateUserName']);
    Route::delete('/delete-user', [UserController::class, 'deleteUser']);
    Route::post('/logout-user' , [UserController::class , 'logoutUser']);

    Route::post('/add-bookmark-movie' , [MovieController::class , 'addMovie']);
    Route::get('/get-bookmark-movie-list' , [MovieController::class, 'getUserBookmarkList']);
});

