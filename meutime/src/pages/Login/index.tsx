export function Login() {
  const regionNames = new Intl.DisplayNames(['pt-BR'], { type: 'region' });

  return (
    <div>
      <h1>Login</h1>
      <h3>{regionNames.of('AR')}</h3>
    </div>
  );
}
