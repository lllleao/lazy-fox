import SiteCard from '../SiteCard'
import * as S from './styles'

import cidadeClipse from '../../assets/imgs/sites/fotoP.png'
import eplay from '../../assets/imgs/sites/eplay.png'
import restEcommerce from '../../assets/imgs/sites/rest-commerce.png'
import restLanding from '../../assets/imgs/sites/restLanding.png'

import { Button } from '../../global'

const SitesProject = () => {
    return (
        <S.SitesSection id="sites" className="container">
            <S.TitleSites>Eleve sua marca com um site só seu</S.TitleSites>
            <S.CardsSitesContainer className="sites">
                <SiteCard
                    description="Cidadecliplse é uma editora cooperativa com inúmeras obras
                    publicadas por eles mesmos, em formatos físicos e digitais. Eles me deram a missão de produzir seu site principal. Nele é
                    possível ver as publicações gratuitas e dar uma espiada nos
                    novos lançamentos "
                    alt="Cidadeclipse"
                    site="https://cidadeclipse.com/"
                    image={cidadeClipse}
                />
                <SiteCard
                    description="Um projeto de estudos, trata-se de uma página que simula um e-commerce. Existe as abas e categorias que listam os jogos, ao clicar o usuáriuo é direcionado a página do jogo, a qual exibe fotos e vídeos do jogo. Além disso, existe a parte do checkout."
                    alt="EPLAY"
                    site="https://eplay-three-virid.vercel.app/"
                    image={eplay}
                />
                <SiteCard
                    description="Landing Page sobre um restaurante fictício. Ela tem um carrossel na entrada, um menu de navegação fixo, seções de cardápio, formulário de fale conosco. Landing Page perfeita para apresentar um produto, um projeto, entre outras coisas, para um novo público."
                    alt="Restaurante fictício Landing Page"
                    site="https://rest-fic-6mc4.vercel.app/"
                    image={restLanding}
                />
                <SiteCard
                    description="Aplicação de um ecommerce fictício. Ela lista restaurantes, ao escolher um, o usuário é direcionado ao cardápio do mesmo. É possível ver o preço e informações de cada prato e simular um pedido."
                    alt="Restaurante fictício Ecommerce"
                    site="https://efood-umber-kappa.vercel.app/"
                    image={restEcommerce}
                />
            </S.CardsSitesContainer>
            <Button className="button">
                <a
                    href="https://wa.link/vl4ncr"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="up">
                        Faça seu orçamento
                        <svg
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </span>
                    <span className="down">
                        Encomende o seu já
                        <svg
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            stroke="#ffffff"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="cart-icon"
                        >
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    </span>
                </a>
            </Button>
        </S.SitesSection>
    )
}

export default SitesProject
