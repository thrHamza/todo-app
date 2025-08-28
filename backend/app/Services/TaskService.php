<?php

namespace App\Services;

use App\Models\Task;
use App\Repositories\TaskRepository;

class TaskService
{
    protected TaskRepository $repository;

    public function __construct(TaskRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getAll()
    {
        return $this->repository->all();
    }

    public function create(array $data): Task
    {
        return $this->repository->create($data);
    }

    public function update(Task $task, array $data): Task
    {
        return $this->repository->update($task, $data);
    }

    public function delete(Task $task): bool
    {
        return $this->repository->delete($task);
    }
}
