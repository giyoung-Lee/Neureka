import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import StopIcon from '@mui/icons-material/Stop'

export const Wrapper = styled.div`
  overflow: hidden;
`

export const Container = styled.div`
  height: 60vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
`

export const Slides = styled.div`
  z-index: 1;
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
`

export const Slide = styled.div`
  background-color: transparent;
`

export const PrevButton = styled(ArrowLeftIcon)`
  background-color: transparent;
  border: none;
  position: absolute;
  z-index: 5;
  left: 0;
  color: white;
`
export const NextButton = styled(ArrowRightIcon)`
  background-color: transparent;
  border: none;
  position: absolute;
  z-index: 10;
  right: 1%;
  color: white;
`

export const IndexBox = styled.div`
  display: flex;
  justify-content: center;
  .focused_card {
    color: var(--color-navy);
  }
`

export const CardIndex = styled(StopIcon)`
  font-size: 1.1rem !important;
  color: var(--color-lightgrey);
`

export const CarouselCard = styled.div<{ bgimage: string }>`
  width: 100dvw;
  height: 100%;
  background-color: #ececec;
  background-image: url(${props => props.bgimage});
  background-size: cover;
  background-position: bottom 10% right;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
  font-family: 'SEBANG_Gothic_Bold';
  &::before {
    background-color: #000000;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  p {
    z-index: 5;
    padding: 1% 3%;
    margin: 0;
  }
`

export const CardTitle1 = styled.p`
  background-color: var(--color-orange);
  position: absolute;
  color: white;
  top: 40%;
  left: 0;
  font-size: 2rem;
`

export const CardContent1 = styled.p`
  position: absolute;
  background-color: white;
  color: var(--color-navy);
  top: 60%;
  left: 0;
  font-size: 1.5rem;
`

export const CardTitle2 = styled.p`
  position: absolute;
  background-color: var(--color-yellow);
  color: white;
  top: 50%;
  left: 3%;
  font-size: 2rem;
`

export const CardContent2 = styled.p`
  position: absolute;
  color: white;
  top: 65%;
  left: 0;
  font-size: 1.5rem;
`

export const CardTitle3 = styled.p`
  background-color: var(--color-dark);
  color: white;
  text-align: center;
  font-size: 2.2rem;
  width: 15vw;
  height: 10%;
`

export const CardContent3 = styled.p`
  color: white;
  font-size: 1.5rem;
`