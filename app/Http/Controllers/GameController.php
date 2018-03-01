<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreGame;
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

    public function store(StoreGame $request)
    {    
        $players = collect($request->input('players'));
        $game = Game::create();

        $players->each(function ($player) use ($game) {
            $starTypeIds = collect($player['starsTypes'])->filter(function ($starTypeVal) {
                return $starTypeVal !== 0;
            })->map(function ($a, $b) {
                return $b;
            });

            $gameUser = GameUser::create([
                'user_id' => $player['id'],
                'game_id' => $game->id,
                'faction_id' => $player['factionId'],
                'engine_id' => $player['engineId'],
                'popularity' => $player['popularity'],
                'power' => $player['power'],
                'stars' => $player['numStars'],
                'territories' => $player['territories'],
                'structures' => $player['structures'],
                'resources' => $player['resources'],
                'gold' => $player['gold'],
                'combat_cards' => $player['combatCards'],
                'encounters' => $player['encounters']
            ]);

            $starTypeIds->each(function ($starTypeId) use ($gameUser) {
                GameUserStarType::create([
                    'game_user_id' => $gameUser->id,
                    'star_type_id' => $starTypeId
                ]);
            });
        });

        if ($request->input('image')) {
            $game->uploadPhoto($request->input('image'));
        }


        return response([
            'game' => Game::with(['game_user', 'game_user_star_type'])->get()
        ], 200);
    }
}
