import { Box, Text, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import GradientLayout from "../components/gradientLayout";
import { useMe } from "../lib/hooks";
import prisma from "../lib/prisma";

const Home = ({ artists }) => {
  const { user } = useMe();
  return (
    <GradientLayout
      roundImage
      color="purple"
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlists`}
      image="https://img.freepik.com/premium-vector/baby-panda-waving-paw-cartoon_42750-612.jpg?w=2000"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%">
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image
                  src="data:image/png;base64,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"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: { artists },
  };
};

export default Home;
