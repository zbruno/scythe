<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GameUser extends Model
{
    protected $table = 'game_user';
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }

    public function game()
    {
        return $this->belongsTo(\App\Models\Game::class);
    }

    public function faction()
    {
        return $this->hasOne(\App\Models\Faction::class);
    }

    public function engine()
    {
        return $this->hasOne(\App\Models\Engine::class);
    }
}
