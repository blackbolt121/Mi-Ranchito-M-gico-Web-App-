@extends("template")
@section("template_head")
    <link href="{{asset("css/adminLogin.css")}}" rel="stylesheet"/>
@endsection
@section("content")
    <div class="adminLogin">
        <h2>Iniciar sesión</h2>
        <form method="POST" action="/adminLogin">
            @csrf
            @method("POST")
            <div class="field">
                <label
                    for="email"
                    class="form-label">
                    <i class="fa-solid fa-at"></i>
                </label>
                <input
                    placeholder="correo"
                    type="email"
                    id="email"
                    class="form-control form-control-lg"
                    name="email"/>
            </div>
            <div class="field">
                <label
                    for="password"
                    class="form-label">
                    <i class="fa-solid fa-lock"></i>
                </label>
                <input
                    placeholder="contraseña"
                    type="password"
                    id="password"
                    class="form-control form-control-lg"
                    name="password"/>
            </div>
            <div class="something_happen">
                <a href="/forgot_password">Olvidaste tu <strong>contraseña</strong></a>
            </div>
            <div class="something_happen">
                <a  href="/register">No tiene cuenta registrate <strong>aquí</strong></a>
            </div>
            <div>
                <button class="btn btn-primary login_button">Iniciar sesión</button>
            </div>
        </form>
    </div>
@endsection
