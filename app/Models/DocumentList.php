<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DocumentList extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'path',
        'type',
        'user_id',
        'type_of_document',
    ];
}