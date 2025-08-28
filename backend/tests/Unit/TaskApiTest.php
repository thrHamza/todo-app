<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Task;

class TaskApiTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function can_fetch_all_tasks()
    {
        Task::factory()->count(3)->create();

        $response = $this->getJson('/api/tasks');

        $response->assertStatus(200)
            ->assertJsonCount(3);
    }

    /** @test */
    public function can_create_task()
    {
        $data = ['description' => 'Nouvelle tâche'];

        $response = $this->postJson('/api/tasks', $data);

        $response->assertStatus(201)
            ->assertJsonFragment(['description' => 'Nouvelle tâche']);

        $this->assertDatabaseHas('tasks', $data);
    }

    /** @test */
    public function can_update_task()
    {
        $task = Task::factory()->create(['completed' => false]);

        $response = $this->putJson("/api/tasks/{$task->id}", ['completed' => true]);

        $response->assertStatus(200)
            ->assertJsonFragment(['completed' => true]);

        $this->assertDatabaseHas('tasks', ['id' => $task->id, 'completed' => true]);
    }

    /** @test */
    public function can_delete_task()
    {
        $task = Task::factory()->create();

        $response = $this->deleteJson("/api/tasks/{$task->id}");

        $response->assertStatus(204);

        $this->assertDatabaseMissing('tasks', ['id' => $task->id]);
    }
}
