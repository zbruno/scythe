<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GameUser extends Model
{
    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }

    public function game()
    {
        return $this->belongsTo(\App\Models\Game::class);
    }

    public function race()
    {
        return $this->hasOne(\App\Models\Race::class);
    }

    public function engine()
    {
        return $this->hasOne(\App\Models\Engine::class);
    }
}
