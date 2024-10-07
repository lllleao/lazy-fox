import SiteCard from '../SiteCard'
import * as S from './styles'

import cidadeClipse from '../../assets/imgs/sites/fotoP.png'
import eplay from '../../assets/imgs/sites/eplay.png'
import restEcommerce from '../../assets/imgs/sites/rest-commerce.png'
import restLanding from '../../assets/imgs/sites/restLanding.png'

import TagSite from '../TagSite'

const SitesProject = () => {
    return (
        <S.SitesSection className="container">
            <S.TitleSites>Eleve sua marca com um site só seu</S.TitleSites>
            <S.CardsSitesContainer className="sites">
                <SiteCard
                    description="Cidadecliplse é uma editora cooperativa com inúmeras obras
                    publicadas por eles mesmos, em formatos físicos e digitais. Eles me deram a missão de produzir seu site principal. Nele é
                    possível ver as publicações gratuitas e dar uma espiada nos
                    novos lançamentos "
                    alt="Cidadeclipse"
                    site="https://cidadeclipse.com/"
                    github="https://github.com/lllleao/cd-react"
                    image={cidadeClipse}
                    tags={
                        <S.Tags>
                            <TagSite>React</TagSite>
                            <TagSite>TypeScript</TagSite>
                            <TagSite>Styled-Components</TagSite>
                            <TagSite>Express</TagSite>
                            <TagSite>NoSQL</TagSite>
                        </S.Tags>
                    }
                />
                <SiteCard
                    description="Um projeto de estudos, trata-se de uma página que simula um e-commerce. Existe as abas e categorias que listam os jogos, ao clicar o usuáriuo é direcionado a página do jogo, a qual exibe fotos e vídeos do jogo. Além disso, existe a parte do checkout."
                    alt="EPLAY"
                    site="https://eplay-three-virid.vercel.app/"
                    github="https://github.com/lllleao/eplay"
                    image={eplay}
                    tags={
                        <S.Tags>
                            <TagSite>React</TagSite>
                            <TagSite>TypeScript</TagSite>
                            <TagSite>Styled-Components</TagSite>
                            <TagSite>React Redux</TagSite>
                            <TagSite>React Router</TagSite>
                        </S.Tags>
                    }
                />
                <SiteCard
                    description="Aplicação de um ecommerce fictício. Ela lista restaurantes, ao escolher um, o usuário é direcionado ao cardápio do mesmo. É possível ver o preço e informações de cada prato e simular um pedido."
                    alt="Restaurante fictício Ecommerce"
                    site="https://efood-umber-kappa.vercel.app/"
                    github="https://github.com/lllleao/efood"
                    image={restLanding}
                    tags={
                        <S.Tags>
                            <TagSite>React</TagSite>
                            <TagSite>TypeScript</TagSite>
                            <TagSite>Styled-Components</TagSite>
                            <TagSite>React Redux</TagSite>
                            <TagSite>React Router</TagSite>
                        </S.Tags>
                    }
                />
                <SiteCard
                    description="Aplicação de um ecommerce fictício. Ela lista restaurantes, ao escolher um, o usuário é direcionado ao cardápio do mesmo. É possível ver o preço e informações de cada prato e simular um pedido."
                    alt="Restaurante fictício Ecommerce"
                    site="https://efood-umber-kappa.vercel.app/"
                    github="https://github.com/lllleao/efood"
                    image={restEcommerce}
                    tags={
                        <S.Tags>
                            <TagSite>React</TagSite>
                            <TagSite>TypeScript</TagSite>
                            <TagSite>Styled-Components</TagSite>
                            <TagSite>React Redux</TagSite>
                            <TagSite>React Router</TagSite>
                        </S.Tags>
                    }
                />
            </S.CardsSitesContainer>
        </S.SitesSection>
    )
}

export default SitesProject
