import { ParticipantesDiv } from "./participantes-style";
import participante1 from "../../assets/img/felipe.png"

const listaParticipantes = [
    {
        nome: 'Felipe Rodrigues',
        posicao: 'Analista de Inteligência Artificial',
        rm: 'RM555121',
        img: participante1
    },
    
];

const Participantes = () => {
    return (
        <ParticipantesDiv>
            <div className="cards-body">
                <div className="slider-container swiper">
                    <div className="slider-content">
                        <div className="card-wrapper swiper-wrapper">
                            {listaParticipantes.map((participante, index) => (
                                <div className="card swiper-slide" key={index}>
                                    <div className="image-content">
                                        <span className="overlay"></span>
                                        <div className="card-image">
                                            <img src={participante.img} className="card-img" alt={participante.nome} />
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <h2 className="name">{participante.nome}</h2>
                                        <p className="description">{participante.posicao}</p>
                                        <button className="button">Rm: {participante.rm}</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="swiper-button-next swiper-navBtn"></div>
                    <div className="swiper-button-prev swiper-navBtn"></div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </ParticipantesDiv>
    );
}

export default Participantes;
