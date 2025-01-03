// este arquivo gera a pagina de imagens especificas de RAPOSAS no site

import styles from "./page.module.css";
import Topbar from '../../components/topbar';
import ImgAnimal from '../../components/imganimal';

// funcao Home() para exportar a pagina 
export default function Home() {

  // no retorno da funcao temos o HTML que sera construido na pagina 
    // <div> temos uma div geral de organizacao chamada "top", que contem os elementos do topo da pagina
      // esta div foi criada para aplicar organizacao e customizacao de CSS a todos estes elementos de uma vez
      // dentro ha dois icones de decoracao <img>, e o logo da pagina <h1>
    // <Topbar/> abaixo, temos o componente Topbar para incluir o menu de navegacao
    // <ImgAnimal/> finalmente, tres imagens de raposas inclusas por meio de componentes ImgAnimal
  return (
    <div>
      <div className="top">
        <img className="webgraphic" src="https://64.media.tumblr.com/f3dc9788318ee2e9d7f1d8403908903d/eca8b10a97918538-c7/s75x75_c1/7cf334441ebb7c65b39a3a9c7f0f8223dec8aad8.gifv"/>
        <h1 className="logo">Imagens de Raposas</h1>
        <img className="webgraphic" src="https://64.media.tumblr.com/a4684f5a22ac0fc2eab4dc9caf7e72be/a53559b838a1040c-fa/s75x75_c1/a53b4d601b0667f42bad5dedc71123d8241df901.gifv"/>
      </div>
      <Topbar/>
      <ImgAnimal animal="raposa"/>
      <ImgAnimal animal="raposa" number="2"/>
      <ImgAnimal animal="raposa" number="3"/>
    </div>
  );
}
