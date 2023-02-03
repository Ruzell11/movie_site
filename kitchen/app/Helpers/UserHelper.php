<?php

namespace App\Helpers;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class UserHelper
{
    public static function registerUserDetails($request)

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
                "password" => bcrypt ($fields['password'])
            ]);

            $token = $user->createToken('myapptoken')->plainTextToken;

            return response([
                "message" => "User successfully created",
                "data" => $user,
                "token" => $token
            ], 200);
        }

    }


    public static function loginUser($request)
    {
        $fields = $request->validate([
            "email" => "required|string|email",
            "password" => "required|string"
        ]);

        $user = User::where('email', $fields['email'])->first();

        if (!$user || !Hash::check($fields['password'], $user['password'])) {
            return response([
                "message" => "Incorrect Email or password",
            ], 404);
        }

        $token = $user->createToken('myapptoken')->plainTextToken;

        return response([
            "message" => "Successfully login",
            "data" => $user,
            "token" => $token
        ], 200);
    }

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


    public static function logoutUserData($request)
    {
        auth()->user()->tokens()->delete();

        return response([
            "message" => "Successfully Logout",
        ], 200);
    }
}
