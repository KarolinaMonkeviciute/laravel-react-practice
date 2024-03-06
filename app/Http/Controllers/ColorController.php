<?php

namespace App\Http\Controllers;

use App\Models\Color;
use App\Http\Requests\StoreColorRequest;
use App\Http\Requests\UpdateColorRequest;

class ColorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $colors = Color::all();
        return inertia('Color/Index', [
            'colors' => $colors,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreColorRequest $request)
    {
        $id = Color::create($request->validated())->id;
        return response()->json([
            'message' => 'Success',
            'id' => $id,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateColorRequest $request, Color $color)
    {
        $color->update($request->validated());
        return response()->json([
            'message' => 'Success',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Color $color)
    {
        $color->delete();
        return response()->json([
            'message' => 'Success',
        ]);
    }
}
