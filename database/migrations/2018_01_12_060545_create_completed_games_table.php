<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompletedGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->increments('id');
            $table->string('s3_photo_id');
            $table->timestamps();
        });

        Schema::create('game_users', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('popularity')->unsigned()->default(0);
            $table->integer('power')->unsigned()->default(0);
            $table->integer('stars')->unsigned()->default(0);
            $table->integer('territories')->unsigned()->default(0);
            $table->integer('structures')->unsigned()->default(0);
            $table->integer('resources')->unsigned()->default(0);
            $table->integer('gold')->unsigned()->default(0);
            $table->integer('combat_cards')->unsigned()->default(0);
            $table->integer('encounters')->unsigned()->default(0);
            $table->integer('game_id')->unsigned();
            $table->integer('race_id')->unsigned();
            $table->integer('engine_id')->unsigned();
            $table->timestamps();
        });

        Schema::create('races', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('character_name');
            $table->string('color');
            $table->integer('start_power');
            $table->integer('start_combat_cards');
        });

        Schema::create('engines', function (Blueprint $table) {
            $table->increments('id');
            $table->string('focus');
            $table->integer('start_order');
            $table->integer('start_popularity');
            $table->integer('start_gold');
        });

        Schema::table('game_users', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('game_id')->references('id')->on('games');
            $table->foreign('race_id')->references('id')->on('races');
            $table->foreign('engine_id')->references('id')->on('engines');
        });

        Schema::create('star_types', function (Blueprint $table) {
            $table->increments('id');
            $table->string('type');
        });

        Schema::create('game_user_star_type', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('game_user_id')->unsigned();
            $table->integer('star_type_id')->unsigned();
        });

        Schema::table('game_user_star_type', function (Blueprint $table) {
            $table->foreign('game_user_id')->references('id')->on('game_users');
            $table->foreign('star_type_id')->references('id')->on('star_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('game_user');
        Schema::dropIfExists('engines');
        Schema::dropIfExists('races');
        Schema::dropIfExists('games');
        Schema::dropIfExists('game_user_star_type');
        Schema::dropIfExists('star_types');
    }
}
