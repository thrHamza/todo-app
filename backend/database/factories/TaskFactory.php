<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Task;

class TaskFactory extends Factory
{
    protected $model = Task::class;

    public function definition()
    {
        return [
            'description' => $this->faker->sentence(3),
            'completed'   => $this->faker->boolean(20),
        ];
    }
}
