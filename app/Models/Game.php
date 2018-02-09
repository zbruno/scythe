<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    public function gameUsers()
    {
        return $this->hasMany(\App\Models\GameUser::class, 'game_id');
    }
}
