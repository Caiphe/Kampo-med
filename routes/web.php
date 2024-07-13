<?php

use App\Http\Controllers\ContentModeratorController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ContentModeratorController::class, 'index'])->name('home');
Route::get('/about', [ContentModeratorController::class, 'about'])->name('about');
Route::get('/contact', [ContentModeratorController::class, 'contact'])->name('contact');
Route::post('/contact-submit', [ContentModeratorController::class, 'submitContact'])->name('contact.submit');
Route::get('/services', [ContentModeratorController::class, 'services'])->name('services');
Route::get('/appointment', [ContentModeratorController::class, 'appointment'])->name('appointment');


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
