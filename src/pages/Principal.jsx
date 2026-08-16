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

        <h2 className="subtitulo">Interesses em tecnologia</h2>
        <p className="texto">UI/UX, Product Design, Inteligência Artificial e Dados.</p>

        <h2 className="subtitulo">Habilidades técnicas</h2>
        <p className="texto">Python, Figma</p>

        <h2 className="subtitulo">Objetivo profissional</h2>
        <p className="texto">Busco construir uma carreira na interseção entre design de produto e tecnologia, aprofundando meus conhecimentos em Inteligência Artificial e Dados para criar soluções digitais com impacto real.</p>
      </section>

      <section id="portfolio" className="section section-portfolio">
        <h1 className="titulo-secao">Portfólio</h1>

        <div className="cards">

            <div className="card">
            <h2 className="card-titulo">WeGlow: A Ascensão de Virgínia</h2>
            <p className="card-descricao"><strong>Disciplina:</strong> Introdução à Programação (IP) no CIn/UFPE</p>
            <p className="card-descricao">Jogo de plataforma 2D desenvolvido em Python com Pygame, inspirado no universo da influenciadora Virginia Fonseca. O objetivo é acumular 1 milhão de seguidores enfrentando rivais e desviando de haters ao longo de três fases.</p>
            <a href="https://github.com/gaabileite/Platform-Game.git" target="_blank" rel="noopener noreferrer" className="card-link">Ver repositório →</a>
            </div>

            <div className="card">
            <h2 className="card-titulo">Coreto</h2>
            <p className="card-descricao"><strong>Disciplina:</strong> Concepção de Artefatos Digitais (CAD) no CIn/UFPE</p>
            <p className="card-descricao">Redesign da plataforma Coreto da Prefeitura do Recife  um hub de inovação que conecta pesquisadores, startups e empresas. O projeto foi desenvolvido em grupo com foco em experiência do usuário e identidade visual.</p>
            <a href="https://www.figma.com/make/r2Rht7AaffSdeHOJTTaKnK/Coreto?t=TUiuy2ph5qkrDXhI-20&fullscreen=1" target="_blank" rel="noopener noreferrer" className="card-link">Ver protótipo →</a>
            </div>

        </div>
      </section>

    </div>
  )
}