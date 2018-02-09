<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;
use App\Models\GameUser;
use App\Models\Engine;
use App\Models\Faction;
use App\Models\User;
use App\Models\StarType;
use App\Models\GameUserStarType;

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
            'factions' => Faction::all(),
            'users' => User::all(),
            'star_types' => StarType::all()
        ], 200);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'players.*.id' => 'required|exists:users,id',
            'players.*.factionId' => 'required|exists:factions,id',
            'players.*.engineId' => 'required|exists:engines,id',
            'players.*.popularity' => 'required|numeric|between:0,18',
            'players.*.power' => 'required|numeric|between:0,16',
            'players.*.stars' => 'required|array|between:0,6',
            'players.*.territories' => 'required|numeric|min:0',
            'players.*.structures' => 'required|numeric|min:0',
            'players.*.resources' => 'required|numeric|min:0',
            'players.*.gold' => 'required|numeric|min:0',
            'players.*.combatCards' => 'required|numeric|min:0',
            'players.*.encounters' => 'required|numeric|min:0'
        ]);
        
        $players = collect($request->input('players'));
        $game = Game::create();

        $players->each(function ($player) use ($game) {
            $stars = collect($player['stars']);
            $gameUser = GameUser::create([
                'user_id' => $player['id'],
                'game_id' => $game->id,
                'faction_id' => $player['factionId'],
                'engine_id' => $player['engineId'],
                'popularity' => $player['popularity'],
                'power' => $player['power'],
                'stars' => $stars->count(),
                'territories' => $player['territories'],
                'structures' => $player['structures'],
                'resources' => $player['resources'],
                'gold' => $player['gold'],
                'combat_cards' => $player['combatCards'],
                'encounters' => $player['encounters']
            ]);

            $stars->each(function ($star) use ($gameUser) {
                GameUserStarType::create([
                    'game_user_id' => $gameUser->id,
                    'star_type_id' => $star
                ]);                
            });
        });

        return response([
            'game' => $game->fresh()->with(['game_user'])
        ], 200);
    }
}
