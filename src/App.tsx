import { useExtension } from "./hooks/useExtension";

import {
  MainWrapper,
  Container,
  Header,
  Section,
  Heading,
  SectionWrapper,
  FilterButtons,
  ExtensionCards,
} from "./components";

const App = () => {
  const { dispatch } = useExtension();

  return (
    <MainWrapper>
      <Container>
        <Header />
        <Section className="browser-extensions">
          <SectionWrapper className="filterbar">
            <Heading>Extensions List</Heading>
            <FilterButtons />
          </SectionWrapper>

          <SectionWrapper className="extensionslist">
            <ExtensionCards />
          </SectionWrapper>
        </Section>
      </Container>
    </MainWrapper>
  );
};

export default App;
