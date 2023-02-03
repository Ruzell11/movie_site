<?php

namespace App\Http\Controllers;

use App\Helpers\Constants;
use App\Models\User;

class DropDownValuesController extends Controller
{

    public function index()
    {

        return response([
            "success" => true,
            "work_industry" => Constants::WORK_INDUSTRIES,
            "user" => User::all()
        ], Constants::HTTP_STATUS_CODE_OK);
    }
};
