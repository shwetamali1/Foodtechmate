<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '^(?!client).*$');


 Route::prefix('client')->group(function (){
    Route::get('/testcall', [HomeController::class, 'test'])->name('test');
    Route::post('/storeGmailData',[HomeController::class, 'storeGmailUSerDetails'])->name('storeGmailUSerDetails');
  });





// routes/web.php

 

// Route::get('/db', function () {
//     dd(\DB::select('SHOW TABLES'));
// });


