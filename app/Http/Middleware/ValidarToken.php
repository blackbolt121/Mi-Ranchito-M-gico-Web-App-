<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use \App\Models\session;
use \App\Models\Ranchito;
class ValidarToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if($token = $request->input('x-token'))
            if(session::query()->where("id",$token)->exists())
                return $next($request);
            else
                return response("Invalid authentication token",404);
        return response("Missing authentication token",400);
    }
}
