<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\Contact;

class ContentModeratorController extends Controller
{
    public function index()
    {
        return view('templates.front.home');
    }

    public function about()
    {
        return view('templates.front.about');
    }

    public function contact()
    {
        return view('templates.front.contact');
    }

    public function submitContact(ContactRequest $request)
    {
        $data = $request->validated();
        Contact::create($data);
        dd('submit contact', $data);
    }

    public function services()
    {
        return view('templates.front.services');
    }   

    public function appointment()
    {
        return view('templates.front.appointment');
    }
}
