<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskRequest;
use App\Models\Task;
use App\Services\TaskService;
use Illuminate\Http\JsonResponse;

class TaskController extends Controller
{
    protected TaskService $service;

    public function __construct(TaskService $service)
    {
        $this->service = $service;
    }

    public function index(): JsonResponse
    {
        return response()->json($this->service->getAll());
    }

    public function store(TaskRequest $request): JsonResponse
    {
        $task = $this->service->create($request->validated());
        return response()->json($task, 201);
    }

    public function update(TaskRequest $request, Task $task): JsonResponse
    {
        $updated = $this->service->update($task, $request->validated());
        return response()->json($updated);
    }

    public function destroy(Task $task): JsonResponse
    {
        $this->service->delete($task);
        return response()->json(null, 204);
    }
}
