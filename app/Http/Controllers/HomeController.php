<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{

    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }


    public function test()
    {
        $data = [
            'success' => true,
            'data' => [
                'sample_key1' => 'sample_value1',
                'sample_key2' => 'sample_value2',
                // Add more sample data as needed
            ]
        ];
    
        return response()->json($data);
    }
    

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }
}
