<?php

namespace App\Http\Controllers;

use App\Helpers\UserHelper;
use App\Models\User;
use Illuminate\Http\Request;


class UserController extends Controller
{
    public function getSingleUserData(Request $request)
    {
        $userDetails = UserHelper::gettingUserData($request);

        return $userDetails;
    }

    public function addUser(Request $request)
    {
        $createUser = UserHelper::addUserDetails($request);

        return $createUser;
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

    public function loginUser(Request $request)
    {
        $loginUserData = UserHelper::loginUser($request);

        return $loginUserData;
    }
}
