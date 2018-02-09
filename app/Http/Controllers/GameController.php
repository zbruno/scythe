<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;
use App\Models\GameUser;
use App\Models\Engine;
use App\Models\Race;
use App\Models\User;
use App\Models\StarType;

class GameController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        return response([
            'engines' => Engine::all(),
            'races' => Race::all(),
            'users' => User::all(),
            'star_types' => StarType::all()
        ], 200);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'players.*.id' => 'required|exists:users,id',
            'players.*.raceId' => 'required|exists:races,id',
            'players.*.engineId' => 'required|exists:engines,id',
            'players.*.popularity' => 'required|numeric|between:0,18',
            'players.*.power' => 'required|numeric|between:0,16',
            'players.*.stars' => 'required|numeric|between:0,6',
            'players.*.territories' => 'required|numeric|min:0',
            'players.*.structures' => 'required|numeric|min:0',
            'players.*.gold' => 'required|numeric|min:0',
            'players.*.combatCards' => 'required|numeric|min:0',
            'players.*.encounters' => 'required|numeric|min:0'
        ]);
        
        $players = collect($request->input('players'));
        dd($players);
        $game = Game::create();



        $game = $request->user()->completedGames()->create([
            'completed_game_id' => $request->input('completedGameId'),
            'race_id' => $request->input('raceId'),
            'engine_id' => $request->input('engineId'),
            'popularity' => $request->input('popularity'),
            'stars' => $request->input('stars'),
            'territories' => $request->input('territories'),
            'structures' => $request->input('structures'),
            'resources' => $request->input('resources'),
            'gold' => $request->input('gold')
        ]);

        return response([
            'game' => $game
        ], 200);
    }
}
