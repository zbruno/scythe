<?php

use Illuminate\Database\Seeder;
use App\Models\Engine;

class EngineSeeder extends Seeder
{
    public function run()
    {
        Engine::updateOrCreate(
          ['id' => 1],
          [
            'focus' => 'Industrial',
            'start_order' => 1,
            'start_popularity' => 2,
            'start_gold' => 4
          ]
        );

        Engine::updateOrCreate(
          ['id' => 2],
          [
            'focus' => 'Engineering',
            'start_order' => 2,
            'start_popularity' => 2,
            'start_gold' => 5
          ]
        );

        Engine::updateOrCreate(
          ['id' => 3],
          [
            'focus' => 'Militant',
            'start_order' => 3,
            'start_popularity' => 3,
            'start_gold' => 4
          ]
        );

        Engine::updateOrCreate(
          ['id' => 4],
          [
            'focus' => 'Patriotic',
            'start_order' => 4,
            'start_popularity' => 2,
            'start_gold' => 6
          ]
        );

        Engine::updateOrCreate(
          ['id' => 5],
          [
            'focus' => 'Innovative',
            'start_order' => 5,
            'start_popularity' => 3,
            'start_gold' => 5
          ]
        );

        Engine::updateOrCreate(
          ['id' => 6],
          [
            'focus' => 'Mechanical',
            'start_order' => 6,
            'start_popularity' => 3,
            'start_gold' => 6
          ]
        );

        Engine::updateOrCreate(
          ['id' => 7],
          [
            'focus' => 'Agricultural',
            'start_order' => 7,
            'start_popularity' => 4,
            'start_gold' => 7
          ]
        );
    }
}
