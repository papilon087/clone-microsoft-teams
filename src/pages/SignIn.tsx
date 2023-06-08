export function SignIn() {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-neutral-800">
      <div className="flex flex-col w-full max-w-md items-center justify-center gap-8">
        <h1 className="font-bold text-3xl text-neutral-100">
          Faça login em sua conta
        </h1>
        <button
          className="flex w-full p-4 shadow-sm border rounded items-center justify-center bg-white"
          //onClick={handleSignIn}
        >
          <span className="font-semibold text-lg">Entrar com o Google</span>
        </button>
      </div>
    </div>
  );
}
