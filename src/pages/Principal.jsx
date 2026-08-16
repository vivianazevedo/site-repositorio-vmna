import foto from '../assets/IMG_4595.jpeg'

export default function Principal() {
  return (
    <div className="page">

      <section id="home" className="section section-home">
        <img src={foto} alt="Foto de Vivian" className="foto-perfil" width="200"/>
        <h1 className="nome">Vivian Maria do Nascimento Azevedo</h1>
        <p className="apresentacao">Estudante de Sistemas de Informação no Centro de Informática da UFPE, cursando o 2º período.</p>
        <p className="apresentacao">Atuo no CITi, empresa júnior do CIn, em projetos de tecnologia e inovação.</p>
        <h2 className="subtitulo">Interesses</h2>
        <p className="texto">UI/UX, Product Design, Inteligência Artificial e Dados.</p>
        <h2 className="subtitulo">Contato</h2>
        <p className="texto email">vivianazevedo2007@gmail.com</p>
      </section>

      <section id="sobre" className="section section-sobre">
        <h1 className="titulo-secao">Sobre</h1>
        <p className="texto">Graduei o Ensino Fundamental II e Ensino Médio no Colégio Militar do Recife (2019–2025).</p>
        <p className="texto">Atualmente curso Sistemas de Informação no CIn-UFPE, onde desenvolvo projetos em tecnologia e inovação pelo CITi.</p>
      </section>

      <section id="portfolio" className="section section-portfolio">
        <h1 className="titulo-secao">Portfólio</h1>

        <div className="cards">

            <div className="card">
            <h2 className="card-titulo">WeGlow</h2>
            <p className="card-descricao">Jogo desenvolvido na disciplinha de Introdução à Programação no CIn-UFPE.</p>
            <a href="https://github.com/gaabileite/Platform-Game.git" target="_blank" rel="noopener noreferrer" className="card-link">Saber mais →</a>
            </div>

            <div className="card">
            <h2 className="card-titulo">Coreto</h2>
            <p className="card-descricao">Projeto desenvolvido em grupo na disciplina de Concepção de Artefatos Digitais no CIn-UFPE.</p>
            <a href="https://www.figma.com/make/r2Rht7AaffSdeHOJTTaKnK/Coreto?t=TUiuy2ph5qkrDXhI-20&fullscreen=1" target="_blank" rel="noopener noreferrer" className="card-link">Ver protótipo →</a>
            </div>

        </div>
        </section>

    </div>
  )
}