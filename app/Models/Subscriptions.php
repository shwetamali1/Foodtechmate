<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscriptions extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'payment_date',
        'payment_amount',
        'payment_status',
        'subscription_plan',
    ];
}
