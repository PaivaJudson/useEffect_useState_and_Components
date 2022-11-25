import ImagemDois from '../assets/word-image-2.png';

const Imagem = () => {

    return(
        <div>
            <img src="/img1.jpg" alt="Imagem Um" />
            <br />
            <img src={ImagemDois} alt="" />
        </div>
    );
}

export default Imagem;
