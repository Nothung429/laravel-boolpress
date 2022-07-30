@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h1>{{$post->title}}</h1>
            </div>
            <div class="card-body">
                <div>
                    {{$post->content}}
                </div>
            </div>
            @if($post->image)
            <div class="mb-3">
                <img src="{{asset('storage/{$post->image}')}}" alt="">
            </div>
            @endif
        </div>
    </div>
@endsection