<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BasicController extends Controller
{
    public function indexBlade(Request $request){
        return view('basic',[
            'color' => $request->color ?? 'skyblue',
        ]);
    }

    public function indexInertia(Request $request){
        return inertia('Basic', [
            'color' => $request->color ?? 'skyblue',
        ]);
    }
}
