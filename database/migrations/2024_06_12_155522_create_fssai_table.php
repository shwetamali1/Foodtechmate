<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFssaiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fssai', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('fsssai_id');
            $table->string('license_no');
            $table->date('expiry_date');
            $table->unsignedBigInteger('user_id');
            $table->string('old_license_no')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fssai');
    }
}
