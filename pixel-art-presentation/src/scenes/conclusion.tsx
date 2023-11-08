import {makeScene2D, Circle, Grid, Txt, Layout, Img} from '@motion-canvas/2d';
import {Center, Direction, all, beginSlide, chain, createRef, slideTransition} from '@motion-canvas/core';
import textmod from "../../img/modern/textmodquack.jpg"
import petscii from "../../img/PETSCII.png"

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();
  const title = createRef<Txt>();
  const title_lay = createRef<Layout>();
  const part_title = createRef<Txt>();
  const img = createRef<Img>();

  view.add(
    <>
      <Grid
        ref={grid}
        height={'100%'}
        width={'100%'}
        stroke={'#666'}
        strokeFirst={true}
        fill={'#FFFFFF'}
        spacing={100}
        start={1}
        end={0}
      />
      <Layout ref={title_lay} direction={'column'} alignItems={'center'} gap={0} layout>
        <Txt ref={title} opacity={1} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={100} wrap={'wrap'}>Merci pour votre attention !</Txt>
      </Layout>
    </>,
  );

  yield* slideTransition(Direction.Bottom);
  yield* all(
    grid().stroke('#FFF', 2),
    grid().end(0.5, 2),
    grid().start(0.5, 2),
    grid().spacing(200, 3),
  );
  yield* title().text("Avez vous des questions ?", 3)
  yield* beginSlide('conclusion')

});