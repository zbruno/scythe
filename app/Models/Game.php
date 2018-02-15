<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Game extends Model
{
    protected $guarded = [];

    public function gameUsers()
    {
        return $this->hasMany(\App\Models\GameUser::class, 'game_id');
    }

    public function uploadPhoto($file)
    {
        $path = sha1(microtime());
        Storage::put($path.'.jpg', $file);
        $img = Storage::get($path.'.jpg');
        $this->s3_photo_id = $path;
        $this->save();
    }
}
