import styled from "@emotion/styled";
import Title from "../component/Title";



export const Container = styled.section`
border: 1px solid black;
`;
export const SectionContainer = styled.div`
display: flex;
height: 600px;
align-items: center;
justify-content: center;
`;
export const SectionShadowContainer = styled.div`
display: flex;
padding-bottom: 10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 15px 10px -15px;
`;
export const SectionPokedexShadowContainer = styled(SectionShadowContainer)`
flex-direction: column;
align-items: center;
`;
export const PokedexSectionContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 500px;
`;
export const TextSection = styled.p`
padding-right: 5px;
padding-left: 5px;
text-align: center;
/* border: 1px solid blue; */
width: 20%;
color: #5E7887;
`;

export const ImgCustom = styled.img`
width: 177px;
height: 329px;
`;
export const PokeImgCustom = styled.img`
width: 440px;
height: 299px;
`;
export const CustomTitle = styled(Title)`
`;


