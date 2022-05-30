<?php

namespace App\Http\Middleware;

use App\Models\Ranchito;
use Closure;
use Illuminate\Http\Request;
class MiddlewareRanchito
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
        if($ranchito = $request->input('ranchito')){
            if(Ranchito::query()->where('id',$ranchito)->exists()){
                return $next($request);
            }else{
                return response("Invalid Ranchito ID",404);
            }
        }else{
            return response("Missing ranchito");
        }
    }
}
