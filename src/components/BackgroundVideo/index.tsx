import { Container } from "./styles";

export function BackgroundPlayer() {
  return (
    <Container>
      <video autoPlay={true} loop={true} muted >
          <source  src="https://thumbs.gfycat.com/CarefreeDarkFlyingfish-mobile.mp4" type="video/mp4"/>
      </video>
    </Container>
  )
}