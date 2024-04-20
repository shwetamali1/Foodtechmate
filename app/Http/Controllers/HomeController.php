<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class HomeController extends Controller
{

    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $method = $request->route()->getActionMethod();
            if (strpos($method, 'client') === 0) {
                $this->middleware('web');
            } else {
                $this->middleware('auth');
            }

            return $next($request);
        });
    }


    public function test()
    {
;        $data = [
            'success' => true,
            'data' => [
                'sample_key1' => 'sample_value1',
                'sample_key2' => 'sample_value2',
                // Add more sample data as needed
            ]
        ];
    
        return response()->json($data);
    }
    public function storeGmailUSerDetails(Request $request)
    {
        $name = $request->get('name');
        $email = $request->get('email');
        $password = bcrypt($request->get('given_name'));
        User::create([
            'name' => $name,
            'email' => $email,
            'password' => $password,
        ]);
    
    
        return response()->json('Success');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('welcome');
    }
}
