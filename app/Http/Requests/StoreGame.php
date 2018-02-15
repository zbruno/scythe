<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Race;

class StoreGame extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            // 'image' => 'sometimes|image',
            'players.*.id' => 'required|exists:users,id',
            'players.*.factionId' => 'required|exists:factions,id',
            'players.*.engineId' => 'required|exists:engines,id',
            'players.*.popularity' => 'required|numeric|between:0,18',
            'players.*.power' => 'required|numeric|between:0,16',
            'players.*.numStars' => 'required|numeric|between:0,6',
            'players.*.starsTypes' => 'required|array',
            'players.*.territories' => 'required|numeric|min:0',
            'players.*.structures' => 'required|numeric|min:0',
            'players.*.resources' => 'required|numeric|min:0',
            'players.*.gold' => 'required|numeric|min:0',
            'players.*.combatCards' => 'required|numeric|min:0',
            'players.*.encounters' => 'required|numeric|min:0'
        ];
    }
}
