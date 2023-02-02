<?php

namespace App\Helpers;

use App\Models\User;
use Illuminate\Support\Facades\DB;


class UserHelper
{
    public static function gettingUserData($request)
    {
        $id = $request->id;

        if (!$id) {
            return response([
                'message' => 'Id is required',
            ], 404);
        }

        $userData = DB::table('users')->find($id);

        if (empty($userData)) {
            return response([
                'message' => 'User details not found',
            ], 200);
        }

        return response([
            'message' => 'User',
            'data' => $userData
        ], 200);
    }

    public static function addUserDetails($request)
    {
        $fields = $request->validate([
            "name" => "required|string",
            "email" => "required|email",
            "password" => "required|string",
        ]);

        if ($request->has(['name', 'email', 'password'])) {

            $user = User::create([
                "name" => $fields['name'],
                "email" => $fields['email'],
                "password" => $fields['password']
            ]);

            return response([
                "message" => "User successfully created",
                "data" => $user
            ], 200);
        }

        return response([
            "message" => "Missing fields are required",
        ], 404);
    }

    public static function updatingUsername($request)
    {
        $id = $request->id;
        $userName = $request->name;

        if (!$id) {
            return response([
                "message" => "id is required",
            ], 404);
        }

        $isUserExist = DB::table('users')->find($id);

        if ($isUserExist) {

            DB::table('users')
                ->where('id', $id)
                ->update(['name' => $userName]);

            $userDetails = DB::table('users')->find($id);

            return response([
                "message" => "Successfully updated",
                "updated_data" => $userDetails
            ], 200);
        }

        return response([
            "message" => "User not exist",
        ], 400);
    }

    public static function deletingUser($request)
    {
        $id = $request->id;
        $isUserExist = DB::table('users')->find($id);

        if ($isUserExist) {
            DB::table('users')->where('id', $id)->delete();

            return response([
                "message" => "Successfully deleted",
            ], 200);
        }

        return response([
            "message" => "User not exist",
        ], 400);
    }
    public static function loginUser($request)
    {
        $fields = $request->validate([
            "email" => "required|string|email",
            "password" => "required|string"
        ]);

        $user = User::where('email', $fields['email'])->first();

        if (!$user || $user['password'] != $fields['password']) {
            return response([
                "message" => "Incorrect Email or password",
            ], 404);
        }

        return response([
            "message" => "Successfully login",
            "data" => $user
        ], 200);
    }
}
