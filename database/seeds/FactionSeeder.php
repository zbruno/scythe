<?php

use Illuminate\Database\Seeder;
use App\Models\Faction;

class FactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Faction::updateOrCreate(
          ['id' => 1],
          [
            'name' => 'Polania Republic',
            'character_name' => 'Anna & Wojtek',
            'color' => 'white',
            'start_power' => 2,
            'start_combat_cards' => 3
          ]
        );

        Faction::updateOrCreate(
          ['id' => 2],
          [
            'name' => 'Saxony Empire',
            'character_name' => 'Gunter von Duisburg with Nacht & Tag',
            'color' => 'black',
            'start_power' => 1,
            'start_combat_cards' => 4
          ]
        );

        Faction::updateOrCreate(
          ['id' => 3],
          [
            'name' => 'Crimean Khanate',
            'character_name' => 'Zehra & Kar',
            'color' => 'yellow',
            'start_power' => 5,
            'start_combat_cards' => 0
          ]
        );

        Faction::updateOrCreate(
          ['id' => 4],
          [
            'name' => 'Nordic Kingdom',
            'character_name' => 'Bjorn & Mox',
            'color' => 'blue',
            'start_power' => 4,
            'start_combat_cards' => 1
          ]
        );

        Faction::updateOrCreate(
          ['id' => 5],
          [
            'name' => 'Rusviet Union',
            'character_name' => 'Olga Romanova & Changa',
            'color' => 'red',
            'start_power' => 3,
            'start_combat_cards' => 2
          ]
        );

        Faction::updateOrCreate(
          ['id' => 6],
          [
            'name' => 'Togawa Shogunate',
            'character_name' => 'Akiko & Jiro',
            'color' => 'purple',
            'start_power' => 0,
            'start_combat_cards' => 2
          ]
        );

        Faction::updateOrCreate(
          ['id' => 6],
          [
            'name' => 'Clan Albion',
            'character_name' => 'Connor & Max',
            'color' => 'green',
            'start_power' => 3,
            'start_combat_cards' => 0
          ]
        );
    }
}
