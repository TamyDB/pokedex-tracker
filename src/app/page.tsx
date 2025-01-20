import Colors from '~/styles/themes'

export default function HomePage() {

  const theme = Colors.gastly

  return (
    <main className="flex justify-center">
      <div className="w-3/5 h-screen text-center" style={{ backgroundColor: theme.background }}>
        <header>
          <h1 className="mt-24 mb-8">Pokedex/Livingdex <br />Tracker</h1>
          <p>We are a free to use tracker <br /> for your everyday pokemon needs!</p>
        </header>
        <form className="flex flex-col items-center">
          <h2 className="mt-24 mb-4">Sign in</h2>
          <label>Username/Email:</label>
          <input type="text" />
          <label>Password:</label>
          <input type="text" />
        </form>
      </div>
    </main>
  )
}
