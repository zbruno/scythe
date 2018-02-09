<?php

use Illuminate\Database\Seeder;
use App\Models\StarType;

class StarTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        StarType::updateOrCreate(
          ['id' => 1],
          ['type' => '6 Upgrades']
        );

        StarType::updateOrCreate(
          ['id' => 2],
          ['type' => '4 Mechs']
        );

        StarType::updateOrCreate(
          ['id' => 3],
          ['type' => '4 Buildings']
        );

        StarType::updateOrCreate(
          ['id' => 4],
          ['type' => '4 Enlistments']
        );

        StarType::updateOrCreate(
          ['id' => 5],
          ['type' => '8 Workers']
        );

        StarType::updateOrCreate(
          ['id' => 6],
          ['type' => '1 Mission Card']
        );

        StarType::updateOrCreate(
          ['id' => 7],
          ['type' => '1 Battle']
        );

        StarType::updateOrCreate(
          ['id' => 8],
          ['type' => '1 Battle']
        );

        StarType::updateOrCreate(
          ['id' => 9],
          ['type' => '18 Popularity']
        );

        StarType::updateOrCreate(
          ['id' => 10],
          ['type' => '16 Power']
        );
    }
}
