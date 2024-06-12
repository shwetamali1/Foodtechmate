<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fssai extends Model
{
    use HasFactory;
    protected $fillable = [
        'fsssai_id',
        'license_no',
        'expiry_date',
        'user_id',
        'old_license_no',
    ];
}
