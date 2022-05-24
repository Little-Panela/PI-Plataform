import {
  Container,
  IntroductionContent,
  LeftHome,
  IntroductionContentContainer,
} from "./styles";

import { ProjectSection } from "../../components/Projects";

import benitas from "../../assets/benitas.png";
import plantacao from "../../assets/plantacao.png";
import photoHomePage from "../../assets/photoHomePage.svg";

import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Sponsors } from "../../components/Sponsors";

import { Link } from "react-scroll";
import AboutSection from "../../components/AboutSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export interface Project {
  _id: string;
  image: string;
  title: string;
  description: string;
  participants: string;
  github: string;
  trello: string;
  video: string;
}

export function Main() {
  return (
    <Container>
      <main>
        <Navbar />
        <IntroductionContent>
          <IntroductionContentContainer>
            <LeftHome>
              <span>BOAS-VINDAS A COMPUTAÇÃO AMOSTRA 2022 👋 👋</span>
              <h1>Amazon Hacking</h1>
              <p>
                Universitários elaboram projetos sustentáveis para a Ilha das
                Onças e sua comunidade ribeirinha. Amazon Hacking surgiu da
                união dos cursos de Ciência da Computação e Engenharia da
                Computação do Cesupa, da parceria das empresas socialmente
                responsáveis e sustentáveis, como Paladar Amazônico,
                byAmazonian, Jambu Tecnologia e OnDrone, e também da Associação
                das Empresas Paraenses de Software e TIC - ParaTIC e da
                organização não governamental Instituto Jovem Exportador.
              </p>
              <div>
                <Link to="periods" smooth={true}>
                  <button>Ver Projetos</button>
                </Link>
                <Link to="about" smooth={true}>
                  <a href="#">Saiba Mais</a>
                </Link>
              </div>
            </LeftHome>
            <div className="carouselContainer">
              <Swiper>
                <SwiperSlide>
                  <img src={plantacao} alt="Vista na ilha das onças" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={benitas} alt="Vista na ilha das onças" />
                </SwiperSlide>
              </Swiper>
            </div>
          </IntroductionContentContainer>
        </IntroductionContent>
        <AboutSection />
        <ProjectSection />
        <Sponsors />
      </main>
      <Footer />
    </Container>
  );
}
