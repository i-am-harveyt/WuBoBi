import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import AudioRecorder from "./AudioRecorder";

export default function Scriptures() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const boreboluomi = () => {
		return (
			<Text>
				觀自在菩薩。行深般若波羅蜜多時。照見五蘊皆空。度一切苦厄。
				<br />
				舍利子。色不異空。空不異色。色即是空。空即是色。受想行識。
				<br />
				亦復如是。舍利子。是諸法空相。不生不滅。不垢不淨。不增不減。
				<br />
				是故空中無色。無受想行識。無眼耳鼻舌身意。無色聲香味觸法。
				<br />
				無眼界。乃至無意識界。無無明。亦無無明盡。乃至無老死。
				<br />
				亦無老死盡。無苦集滅道。無智亦無得。以無所得故。菩提薩埵。
				<br />
				依般若波羅蜜多故。心無罣礙。無罣礙故。無有恐怖。遠離顛倒夢想。
				<br />
				究竟涅槃。三世諸佛。依般若波羅蜜多故。得阿耨多羅三藐三菩提。
				<br />
				故知般若波羅蜜多。是大神咒。是大明咒。是無上咒。是無等等咒。
				<br />
				能除一切苦。真實不虛。故說般若波羅蜜多咒。即說咒曰。
				<br />
				揭諦揭諦。波羅揭諦。波羅僧揭諦。菩提薩婆訶。
			</Text>
		);
	};
	const taishangqinjing = () => {
		return (
			<Text>
				老君曰，大道無形，生育天地。大道無情，運行日月。大道無名，長養萬物。吾不知其名，強名曰道。
				<br />
				夫道者，有清有濁。有動有靜。天清地濁。天動地靜。男清女濁。男動女靜。降本流末。而生萬物。
				<br />
				清者濁之源。動者靜之基。人能常清靜。天地悉皆歸。
				<br />
				夫人神好清，而心擾之。人心好靜。而慾牽之。
				<br />
				常能遣其慾，而心自靜。澄其心，而神自清。自然六慾不生，三毒消滅。
				<br />
				所以不能者，為心未澄，慾未遣也。
				<br />
				能遣之者，內觀其心。心無其心。外觀其形。形無其形。遠觀其物。物無其物。三者既悟。惟見於空。
				<br />
				觀空亦空。空無所空。所空既無，無無亦無，無無既無，湛然常寂。寂無所寂，慾豈能生，慾既不生。即是真靜。
				<br />
				真常應物，真常得性，常應常靜，常清靜矣。
				<br />
				如此清靜，漸入真道。既入真道，名謂得道。雖名得道，實無所得。為化眾生。名謂得道。能悟之者，可傳聖道。
				<br />
				太上老君曰，上士無爭，下士好爭。上德不德，下德執德，執著之者，不明道德。
				<br />
				眾生所以不得真道者，為有妄心。
				<br />
				既有妄心，即驚其神。既驚其神，即著萬物。既著萬物，即生貪求。既生貪求，即是煩惱。
				<br />
				煩惱妄想，憂苦身心，便遭濁辱。流浪生死。常沉苦海，永失真道，真常之道，悟者自得，得悟道者，常清靜矣。
			</Text>
		);
	};

	const dizangpusabenyuanjing = () => {
		return (
			<Text>
				地藏讚
				<br />
				稽首本然清淨地，無盡佛藏大慈尊，
				<br />
				南方世界湧香雲，香雨花雲及花雨，
				<br />
				寶雨寶雲無數種，為祥為瑞遍莊嚴，
				<br />
				天人問佛是何因，佛言地藏菩薩至，
				<br />
				三世如來同讚歎，十方菩薩共皈依，
				<br />
				我今宿植善因緣，稱揚地藏真功德，
				<br />
				慈因積善，誓救眾生，
				<br />
				手中金錫，振開地獄之門。 掌上明珠，光攝大千世界。
				<br />
				智慧音裡，吉祥雲中，
				<br />
				為閻浮提苦眾生，作大證明功德主。
				<br />
				大悲大願，大聖大慈，
				<br />
				本尊地藏菩薩摩訶薩。
				<br />
				開經偈
				<br />
				無上甚深微妙法
				<br />
				百千萬劫難遭遇
				<br />
				我今見聞得受持 願解如來真實義
			</Text>
		);
	};

	/* Component */
	return (
		<>
			<Button w={"50%"} variant={"outline"} onClick={onOpen}>
				誦經
			</Button>
			<Modal
				isCentered
				onClose={onClose}
				isOpen={isOpen}
				motionPreset="slideInBottom"
				scrollBehavior="inside"
				size={"xl"}
			>
				<ModalOverlay>
					<ModalContent
						bgColor={"rgba(10, 10, 10, 0.75)"}
						color={"whiteAlpha.900"}
					>
						<Tabs>
							<ModalHeader>
								<TabList>
									<Tab>《般若波羅蜜多心經》</Tab>
									<Tab>《太上清靜經》</Tab>
									<Tab>《地藏菩薩本願經》</Tab>
								</TabList>
							</ModalHeader>
							<ModalCloseButton />
							<ModalBody h={"md"} fontSize={"xl"}>
								<TabPanels>
									<TabPanel>{boreboluomi()}</TabPanel>
									<TabPanel>{taishangqinjing()}</TabPanel>
									<TabPanel>{dizangpusabenyuanjing()}</TabPanel>
								</TabPanels>
							</ModalBody>
						</Tabs>
						<AudioRecorder />
					</ModalContent>
				</ModalOverlay>
			</Modal>
		</>
	);
}
