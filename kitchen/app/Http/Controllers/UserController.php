<?php

namespace App\Http\Controllers;

use App\Helpers\UserHelper;
use Illuminate\Http\Request;


class UserController extends Controller
{
    public function registerUser(Request $request)
    {
        $createUser = UserHelper::registerUserDetails($request);

        return $createUser;
    }

    public function loginUser(Request $request)
    {
        $loginUserData = UserHelper::loginUser($request);

        return $loginUserData;
    }

    public function getSingleUserData(Request $request)
    {
        $userDetails = UserHelper::gettingUserData($request);

        return $userDetails;
    }

    public function updateUserName(Request $request)
    {
        $updatedData = UserHelper::updatingUsername($request);

        return $updatedData;
    }

    public function deleteUser(Request $request)
    {
        $deletedUser = UserHelper::deletingUser($request);

        return $deletedUser;
    }

    public function logoutUser(Request $request)
    {
        $logoutUser = UserHelper::logoutUserData($request);

        return $logoutUser;

    }
}
