<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "nombre" => substr($this->faker->sentence,0,10),
            "password" => $this->faker->password,
            "email" => $this->faker->email,
            "ciudad" => random_int(0,3)
        ];
    }
}
