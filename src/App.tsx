import "./App.css";

export default function App() {
  // Criar várias partículas
  const particles = Array.from({ length: 20 });

  return (
    <>
      {particles.map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            width: `${Math.random() * 6 + 4}px`,
            height: `${Math.random() * 6 + 4}px`,
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 10 + 5}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      <div className="card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4792/4792950.png"
          alt="Foto de perfil"
          className="profile-img"
          width="150px"
        />
        <h2>Maria Silva</h2>
        <p>Desenvolvedora Front-end apaixonada por React e CSS.</p>
        <button className="btn">Seguir</button>
      </div>
    </>
  );
}
