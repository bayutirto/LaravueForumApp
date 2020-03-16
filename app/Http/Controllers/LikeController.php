<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Reply;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function likeIt(Reply $reply)
    {
        // 'user_id' => auth()->id()
        $reply->like()->create([
            'user_id' => '5'
            ]);
    }

    public function unLikeIt(Reply $reply)
    {
        // $reply->like()->where(['user_id', auth()->id()])->first()->delete();
        $reply->like()->where('user_id', '5')->first()->delete();
    }
}
