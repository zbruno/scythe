<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        User::updateOrCreate(
          ['id' => 1],
          [
            'name' => 'Zach',
            'email' => 'zachcbruno@gmail.com',
            'password' => Hash::make('123123123')
          ]
        );

        User::updateOrCreate(
          ['id' => 2],
          [
            'name' => 'Fred',
            'email' => 'frederick.lough@gmail.com',
            'password' => Hash::make('password')
          ]
        );

        User::updateOrCreate(
          ['id' => 3],
          [
            'name' => 'Jacob',
            'email' => 'alto50@gmail.com',
            'password' => Hash::make('password')
          ]
        );

        User::updateOrCreate(
          ['id' => 4],
          [
            'name' => 'Cappy',
            'email' => 'pittsc163056@gmail.com',
            'password' => Hash::make('password')
          ]
        );
    }
}
