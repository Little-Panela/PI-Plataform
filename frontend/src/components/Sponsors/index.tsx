import { SponsorsContainer, Textfield, Brands } from "./styles";

import CesupaLogo from "../../assets/CesupaLogo.svg";
import ArgoLogo from "../../assets/ArgoLogo.svg";
import OmniLogo from "../../assets/OmniLogo.svg";
import CabccLogo from "../../assets/CabccLogo.svg";
import CaencLogo from "../../assets/CaencLogo.svg";
import SqlNorteLogo from "../../assets/SqlNorteLogo.svg";
import SolLogo from "../../assets/SolLogo.svg";
import JambuLogo from "../../assets/JambuLogo.svg";
import OndroneLogo from "../../assets/OndroneLogo.svg";
import PaladarAmazonicoLogo from "../../assets/PaladarAmazonicoLogo.svg";
import ParaticLogo from "../../assets/paratic2.png"

export function Sponsors() {
  return (
    <SponsorsContainer>
      <Textfield>
        <p>Realização</p>
        <p>Organização</p>
        <p>Apoio</p>
        <p>Parceria</p>
      </Textfield>
      <Brands>
        <div>
          <a href="https://www.cesupa.br/" target="_blank">
            <img src={CesupaLogo} alt="Logo do Cesupa" />
          </a>
          <img src={ArgoLogo} alt="Logo da Argo" />
          <a href="https://omnicesupa.com/" target="_blank">
            <img src={OmniLogo} alt="Logo da Omni" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/cabcc.cesupa/" target="_blank">
            <img src={CabccLogo} alt="Logo do Cabcc" />
          </a>
          <a href="https://www.instagram.com/caenc.cesupa/" target="_blank">
            <img src={CaencLogo} alt="Logo Do Caenc" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/sqlnorte/" target="_blank">
            <img src={SqlNorteLogo} alt="Logo da Sql Norte" />
          </a>
          <a href="https://www.intersol.com.br/Index.sol" target="_blank">
            <img src={SolLogo} alt="Logo da Sol" />
          </a>
          <a href="https://www.paratic.com.br/" target="_blank">
            <img src={ParaticLogo} alt="Logo da Paratic" />
          </a>
        </div>
        <div>
          <a href="https://www5.jambu.com.br/" target="_blank">
            <img src={JambuLogo} alt="Logo da Jambu" />
          </a>
          <a href="https://www.ondrone.com.br/" target="_blank">
            <img src={OndroneLogo} alt="Logo da Ondrone" />
          </a>
          <a href="https://paladaramazonico.com.br/portal/index.php" target="_blank">
            <img src={PaladarAmazonicoLogo} alt="Logo da Paladar Amazônico" />
          </a>
        </div>
      </Brands>
    </SponsorsContainer>
  );
}
