import { Box, Card, Center, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root
        flexDirection="column"
        overflow="hidden"
        margin="15px"
      >
        <Image objectFit="cover" src={game.background_image} alt={game.name} />
        <Box>
          <Card.Body>
            <Card.Title mb="2">{game.name}</Card.Title>
          </Card.Body>
        </Box>
      </Card.Root>
    </>
  );
};

export default GameCard;
