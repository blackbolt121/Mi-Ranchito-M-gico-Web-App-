
<header>
    <a id="menu"><i class="fa-solid fa-bars"></i></a>
    <nav class="navbar">
        <a href="/"> <img class="navbar-img" src="{{asset("images/logo.png")}}" alt="Mi ranchito Magico"/> </a>
        <ul class="navbar-ul hide">
            <li>
                <a href="#" class="button btn btn-light">Donde Ir</a>
            </li>
            <li>
                <a class="button btn btn-light"href="#">Qué Hacer</a>
            </li>
            <li>
                <a class="btn btn-primary button" href="
                @if($path == "adminLogin")
                    /register
                @else
                    @if($path == "hassession")
                        /dashboard
                    @else
                        /adminLogin
                    @endif
                @endif
                ">
                    @if($path)
                        @if($path == "adminLogin")
                            Register
                        @else
                            @if($path == "hassession")
                                Dashboard
                            @else
                                Login
                            @endif
                        @endif
                    @endif
                </a>
            </li>
        </ul>
    </nav>
</header>
